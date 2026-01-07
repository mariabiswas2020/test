import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { SmsLogController } from "../smsLog.controller";
import { SmsLogService } from "../smsLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  errorMsg: "exampleErrorMsg",
  id: "exampleId",
  message: "exampleMessage",
  phone: "examplePhone",
  sentAt: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  errorMsg: "exampleErrorMsg",
  id: "exampleId",
  message: "exampleMessage",
  phone: "examplePhone",
  sentAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    errorMsg: "exampleErrorMsg",
    id: "exampleId",
    message: "exampleMessage",
    phone: "examplePhone",
    sentAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  errorMsg: "exampleErrorMsg",
  id: "exampleId",
  message: "exampleMessage",
  phone: "examplePhone",
  sentAt: new Date(),
};

const service = {
  createSmsLog() {
    return CREATE_RESULT;
  },
  smsLogs: () => FIND_MANY_RESULT,
  smsLog: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("SmsLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SmsLogService,
          useValue: service,
        },
      ],
      controllers: [SmsLogController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /smsLogs", async () => {
    await request(app.getHttpServer())
      .post("/smsLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
      });
  });

  test("GET /smsLogs", async () => {
    await request(app.getHttpServer())
      .get("/smsLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          sentAt: FIND_MANY_RESULT[0].sentAt.toISOString(),
        },
      ]);
  });

  test("GET /smsLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/smsLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /smsLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/smsLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        sentAt: FIND_ONE_RESULT.sentAt.toISOString(),
      });
  });

  test("POST /smsLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/smsLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        sentAt: CREATE_RESULT.sentAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/smsLogs")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});

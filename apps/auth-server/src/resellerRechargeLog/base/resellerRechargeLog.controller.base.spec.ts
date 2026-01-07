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
import { ResellerRechargeLogController } from "../resellerRechargeLog.controller";
import { ResellerRechargeLogService } from "../resellerRechargeLog.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  note: "exampleNote",
};
const CREATE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  note: "exampleNote",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    date: new Date(),
    id: "exampleId",
    note: "exampleNote",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  note: "exampleNote",
};

const service = {
  createResellerRechargeLog() {
    return CREATE_RESULT;
  },
  resellerRechargeLogs: () => FIND_MANY_RESULT,
  resellerRechargeLog: ({ where }: { where: { id: string } }) => {
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

describe("ResellerRechargeLog", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ResellerRechargeLogService,
          useValue: service,
        },
      ],
      controllers: [ResellerRechargeLogController],
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

  test("POST /resellerRechargeLogs", async () => {
    await request(app.getHttpServer())
      .post("/resellerRechargeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /resellerRechargeLogs", async () => {
    await request(app.getHttpServer())
      .get("/resellerRechargeLogs")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /resellerRechargeLogs/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resellerRechargeLogs"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /resellerRechargeLogs/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/resellerRechargeLogs"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /resellerRechargeLogs existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/resellerRechargeLogs")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/resellerRechargeLogs")
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

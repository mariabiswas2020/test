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
import { CustomerSessionController } from "../customerSession.controller";
import { CustomerSessionService } from "../customerSession.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  bytesIn: 42242424,
  bytesOut: 42242424,
  endedAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  lastSeenAt: new Date(),
  macAddress: "exampleMacAddress",
  sessionId: "exampleSessionId",
  startedAt: new Date(),
};
const CREATE_RESULT = {
  bytesIn: 42242424,
  bytesOut: 42242424,
  endedAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  lastSeenAt: new Date(),
  macAddress: "exampleMacAddress",
  sessionId: "exampleSessionId",
  startedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    bytesIn: 42242424,
    bytesOut: 42242424,
    endedAt: new Date(),
    id: "exampleId",
    ipAddress: "exampleIpAddress",
    lastSeenAt: new Date(),
    macAddress: "exampleMacAddress",
    sessionId: "exampleSessionId",
    startedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  bytesIn: 42242424,
  bytesOut: 42242424,
  endedAt: new Date(),
  id: "exampleId",
  ipAddress: "exampleIpAddress",
  lastSeenAt: new Date(),
  macAddress: "exampleMacAddress",
  sessionId: "exampleSessionId",
  startedAt: new Date(),
};

const service = {
  createCustomerSession() {
    return CREATE_RESULT;
  },
  customerSessions: () => FIND_MANY_RESULT,
  customerSession: ({ where }: { where: { id: string } }) => {
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

describe("CustomerSession", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: CustomerSessionService,
          useValue: service,
        },
      ],
      controllers: [CustomerSessionController],
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

  test("POST /customerSessions", async () => {
    await request(app.getHttpServer())
      .post("/customerSessions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endedAt: CREATE_RESULT.endedAt.toISOString(),
        lastSeenAt: CREATE_RESULT.lastSeenAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
      });
  });

  test("GET /customerSessions", async () => {
    await request(app.getHttpServer())
      .get("/customerSessions")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          endedAt: FIND_MANY_RESULT[0].endedAt.toISOString(),
          lastSeenAt: FIND_MANY_RESULT[0].lastSeenAt.toISOString(),
          startedAt: FIND_MANY_RESULT[0].startedAt.toISOString(),
        },
      ]);
  });

  test("GET /customerSessions/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerSessions"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /customerSessions/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/customerSessions"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        endedAt: FIND_ONE_RESULT.endedAt.toISOString(),
        lastSeenAt: FIND_ONE_RESULT.lastSeenAt.toISOString(),
        startedAt: FIND_ONE_RESULT.startedAt.toISOString(),
      });
  });

  test("POST /customerSessions existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/customerSessions")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        endedAt: CREATE_RESULT.endedAt.toISOString(),
        lastSeenAt: CREATE_RESULT.lastSeenAt.toISOString(),
        startedAt: CREATE_RESULT.startedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/customerSessions")
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

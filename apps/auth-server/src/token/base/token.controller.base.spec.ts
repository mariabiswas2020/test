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
import { TokenController } from "../token.controller";
import { TokenService } from "../token.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  ticketNo: "exampleTicketNo",
};
const CREATE_RESULT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  ticketNo: "exampleTicketNo",
};
const FIND_MANY_RESULT = [
  {
    closedAt: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    ticketNo: "exampleTicketNo",
  },
];
const FIND_ONE_RESULT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  ticketNo: "exampleTicketNo",
};

const service = {
  createToken() {
    return CREATE_RESULT;
  },
  tokens: () => FIND_MANY_RESULT,
  token: ({ where }: { where: { id: string } }) => {
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

describe("Token", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TokenService,
          useValue: service,
        },
      ],
      controllers: [TokenController],
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

  test("POST /tokens", async () => {
    await request(app.getHttpServer())
      .post("/tokens")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closedAt: CREATE_RESULT.closedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /tokens", async () => {
    await request(app.getHttpServer())
      .get("/tokens")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closedAt: FIND_MANY_RESULT[0].closedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /tokens/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tokens"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /tokens/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/tokens"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closedAt: FIND_ONE_RESULT.closedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /tokens existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/tokens")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closedAt: CREATE_RESULT.closedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/tokens")
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

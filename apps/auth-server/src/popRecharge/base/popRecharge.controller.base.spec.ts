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
import { PopRechargeController } from "../popRecharge.controller";
import { PopRechargeService } from "../popRecharge.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  performedBy: "examplePerformedBy",
  reference: "exampleReference",
};
const CREATE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  performedBy: "examplePerformedBy",
  reference: "exampleReference",
};
const FIND_MANY_RESULT = [
  {
    amount: 42.424242424,
    date: new Date(),
    id: "exampleId",
    performedBy: "examplePerformedBy",
    reference: "exampleReference",
  },
];
const FIND_ONE_RESULT = {
  amount: 42.424242424,
  date: new Date(),
  id: "exampleId",
  performedBy: "examplePerformedBy",
  reference: "exampleReference",
};

const service = {
  createPopRecharge() {
    return CREATE_RESULT;
  },
  popRecharges: () => FIND_MANY_RESULT,
  popRecharge: ({ where }: { where: { id: string } }) => {
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

describe("PopRecharge", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PopRechargeService,
          useValue: service,
        },
      ],
      controllers: [PopRechargeController],
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

  test("POST /popRecharges", async () => {
    await request(app.getHttpServer())
      .post("/popRecharges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      });
  });

  test("GET /popRecharges", async () => {
    await request(app.getHttpServer())
      .get("/popRecharges")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          date: FIND_MANY_RESULT[0].date.toISOString(),
        },
      ]);
  });

  test("GET /popRecharges/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/popRecharges"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /popRecharges/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/popRecharges"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        date: FIND_ONE_RESULT.date.toISOString(),
      });
  });

  test("POST /popRecharges existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/popRecharges")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        date: CREATE_RESULT.date.toISOString(),
      })
      .then(function () {
        agent
          .post("/popRecharges")
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

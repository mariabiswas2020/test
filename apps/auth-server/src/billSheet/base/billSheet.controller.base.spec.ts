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
import { BillSheetController } from "../billSheet.controller";
import { BillSheetService } from "../billSheet.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  generatedAt: new Date(),
  id: "exampleId",
  month: "exampleMonth",
  payable: 42.424242424,
  updatedAt: new Date(),
  year: 42,
};
const CREATE_RESULT = {
  generatedAt: new Date(),
  id: "exampleId",
  month: "exampleMonth",
  payable: 42.424242424,
  updatedAt: new Date(),
  year: 42,
};
const FIND_MANY_RESULT = [
  {
    generatedAt: new Date(),
    id: "exampleId",
    month: "exampleMonth",
    payable: 42.424242424,
    updatedAt: new Date(),
    year: 42,
  },
];
const FIND_ONE_RESULT = {
  generatedAt: new Date(),
  id: "exampleId",
  month: "exampleMonth",
  payable: 42.424242424,
  updatedAt: new Date(),
  year: 42,
};

const service = {
  createBillSheet() {
    return CREATE_RESULT;
  },
  billSheets: () => FIND_MANY_RESULT,
  billSheet: ({ where }: { where: { id: string } }) => {
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

describe("BillSheet", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: BillSheetService,
          useValue: service,
        },
      ],
      controllers: [BillSheetController],
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

  test("POST /billSheets", async () => {
    await request(app.getHttpServer())
      .post("/billSheets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        generatedAt: CREATE_RESULT.generatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /billSheets", async () => {
    await request(app.getHttpServer())
      .get("/billSheets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          generatedAt: FIND_MANY_RESULT[0].generatedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /billSheets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/billSheets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /billSheets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/billSheets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        generatedAt: FIND_ONE_RESULT.generatedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /billSheets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/billSheets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        generatedAt: CREATE_RESULT.generatedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/billSheets")
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

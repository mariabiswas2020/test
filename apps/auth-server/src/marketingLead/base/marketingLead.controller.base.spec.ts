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
import { MarketingLeadController } from "../marketingLead.controller";
import { MarketingLeadService } from "../marketingLead.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  address: "exampleAddress",
  createdAt: new Date(),
  id: "exampleId",
  mapLocation: "exampleMapLocation",
  name: "exampleName",
  phone: "examplePhone",
  priceQuote: 42.424242424,
  proposedPackage: "exampleProposedPackage",
  remarks: "exampleRemarks",
};
const CREATE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  id: "exampleId",
  mapLocation: "exampleMapLocation",
  name: "exampleName",
  phone: "examplePhone",
  priceQuote: 42.424242424,
  proposedPackage: "exampleProposedPackage",
  remarks: "exampleRemarks",
};
const FIND_MANY_RESULT = [
  {
    address: "exampleAddress",
    createdAt: new Date(),
    id: "exampleId",
    mapLocation: "exampleMapLocation",
    name: "exampleName",
    phone: "examplePhone",
    priceQuote: 42.424242424,
    proposedPackage: "exampleProposedPackage",
    remarks: "exampleRemarks",
  },
];
const FIND_ONE_RESULT = {
  address: "exampleAddress",
  createdAt: new Date(),
  id: "exampleId",
  mapLocation: "exampleMapLocation",
  name: "exampleName",
  phone: "examplePhone",
  priceQuote: 42.424242424,
  proposedPackage: "exampleProposedPackage",
  remarks: "exampleRemarks",
};

const service = {
  createMarketingLead() {
    return CREATE_RESULT;
  },
  marketingLeads: () => FIND_MANY_RESULT,
  marketingLead: ({ where }: { where: { id: string } }) => {
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

describe("MarketingLead", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: MarketingLeadService,
          useValue: service,
        },
      ],
      controllers: [MarketingLeadController],
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

  test("POST /marketingLeads", async () => {
    await request(app.getHttpServer())
      .post("/marketingLeads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      });
  });

  test("GET /marketingLeads", async () => {
    await request(app.getHttpServer())
      .get("/marketingLeads")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
        },
      ]);
  });

  test("GET /marketingLeads/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/marketingLeads"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /marketingLeads/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/marketingLeads"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
      });
  });

  test("POST /marketingLeads existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/marketingLeads")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/marketingLeads")
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

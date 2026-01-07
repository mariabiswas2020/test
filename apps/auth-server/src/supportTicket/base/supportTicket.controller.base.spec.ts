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
import { SupportTicketController } from "../supportTicket.controller";
import { SupportTicketService } from "../supportTicket.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  resolvedAt: new Date(),
  subject: "exampleSubject",
  ticketNo: "exampleTicketNo",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  resolvedAt: new Date(),
  subject: "exampleSubject",
  ticketNo: "exampleTicketNo",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    closedAt: new Date(),
    createdAt: new Date(),
    description: "exampleDescription",
    id: "exampleId",
    resolvedAt: new Date(),
    subject: "exampleSubject",
    ticketNo: "exampleTicketNo",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  closedAt: new Date(),
  createdAt: new Date(),
  description: "exampleDescription",
  id: "exampleId",
  resolvedAt: new Date(),
  subject: "exampleSubject",
  ticketNo: "exampleTicketNo",
  updatedAt: new Date(),
};

const service = {
  createSupportTicket() {
    return CREATE_RESULT;
  },
  supportTickets: () => FIND_MANY_RESULT,
  supportTicket: ({ where }: { where: { id: string } }) => {
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

describe("SupportTicket", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: SupportTicketService,
          useValue: service,
        },
      ],
      controllers: [SupportTicketController],
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

  test("POST /supportTickets", async () => {
    await request(app.getHttpServer())
      .post("/supportTickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closedAt: CREATE_RESULT.closedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        resolvedAt: CREATE_RESULT.resolvedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /supportTickets", async () => {
    await request(app.getHttpServer())
      .get("/supportTickets")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          closedAt: FIND_MANY_RESULT[0].closedAt.toISOString(),
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          resolvedAt: FIND_MANY_RESULT[0].resolvedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /supportTickets/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supportTickets"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /supportTickets/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/supportTickets"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        closedAt: FIND_ONE_RESULT.closedAt.toISOString(),
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        resolvedAt: FIND_ONE_RESULT.resolvedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /supportTickets existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/supportTickets")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        closedAt: CREATE_RESULT.closedAt.toISOString(),
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        resolvedAt: CREATE_RESULT.resolvedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/supportTickets")
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

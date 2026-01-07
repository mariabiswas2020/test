import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CustomerSessionService } from "./customerSession.service";
import { CustomerSessionControllerBase } from "./base/customerSession.controller.base";

@swagger.ApiTags("customerSessions")
@common.Controller("customerSessions")
export class CustomerSessionController extends CustomerSessionControllerBase {
  constructor(
    protected readonly service: CustomerSessionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

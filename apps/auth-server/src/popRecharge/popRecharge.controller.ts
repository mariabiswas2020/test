import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PopRechargeService } from "./popRecharge.service";
import { PopRechargeControllerBase } from "./base/popRecharge.controller.base";

@swagger.ApiTags("popRecharges")
@common.Controller("popRecharges")
export class PopRechargeController extends PopRechargeControllerBase {
  constructor(
    protected readonly service: PopRechargeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

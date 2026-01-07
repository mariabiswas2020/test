import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";
import { ResellerRechargeLogControllerBase } from "./base/resellerRechargeLog.controller.base";

@swagger.ApiTags("resellerRechargeLogs")
@common.Controller("resellerRechargeLogs")
export class ResellerRechargeLogController extends ResellerRechargeLogControllerBase {
  constructor(
    protected readonly service: ResellerRechargeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

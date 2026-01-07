import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";
import { ResellerRechargeLogControllerBase } from "./base/resellerRechargeLog.controller.base";

@swagger.ApiTags("resellerRechargeLogs")
@common.Controller("resellerRechargeLogs")
export class ResellerRechargeLogController extends ResellerRechargeLogControllerBase {
  constructor(protected readonly service: ResellerRechargeLogService) {
    super(service);
  }
}

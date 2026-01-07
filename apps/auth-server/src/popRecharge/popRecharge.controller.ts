import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PopRechargeService } from "./popRecharge.service";
import { PopRechargeControllerBase } from "./base/popRecharge.controller.base";

@swagger.ApiTags("popRecharges")
@common.Controller("popRecharges")
export class PopRechargeController extends PopRechargeControllerBase {
  constructor(protected readonly service: PopRechargeService) {
    super(service);
  }
}

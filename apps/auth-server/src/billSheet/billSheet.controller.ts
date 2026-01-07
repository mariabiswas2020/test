import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BillSheetService } from "./billSheet.service";
import { BillSheetControllerBase } from "./base/billSheet.controller.base";

@swagger.ApiTags("billSheets")
@common.Controller("billSheets")
export class BillSheetController extends BillSheetControllerBase {
  constructor(protected readonly service: BillSheetService) {
    super(service);
  }
}

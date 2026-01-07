import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BillSheetService } from "./billSheet.service";
import { BillSheetControllerBase } from "./base/billSheet.controller.base";

@swagger.ApiTags("billSheets")
@common.Controller("billSheets")
export class BillSheetController extends BillSheetControllerBase {
  constructor(
    protected readonly service: BillSheetService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

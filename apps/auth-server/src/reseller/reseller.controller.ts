import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResellerService } from "./reseller.service";
import { ResellerControllerBase } from "./base/reseller.controller.base";

@swagger.ApiTags("resellers")
@common.Controller("resellers")
export class ResellerController extends ResellerControllerBase {
  constructor(
    protected readonly service: ResellerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResellerPackageService } from "./resellerPackage.service";
import { ResellerPackageControllerBase } from "./base/resellerPackage.controller.base";

@swagger.ApiTags("resellerPackages")
@common.Controller("resellerPackages")
export class ResellerPackageController extends ResellerPackageControllerBase {
  constructor(
    protected readonly service: ResellerPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

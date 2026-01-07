import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TokenCategoryService } from "./tokenCategory.service";
import { TokenCategoryControllerBase } from "./base/tokenCategory.controller.base";

@swagger.ApiTags("tokenCategories")
@common.Controller("tokenCategories")
export class TokenCategoryController extends TokenCategoryControllerBase {
  constructor(
    protected readonly service: TokenCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TokenCategoryService } from "./tokenCategory.service";
import { TokenCategoryControllerBase } from "./base/tokenCategory.controller.base";

@swagger.ApiTags("tokenCategories")
@common.Controller("tokenCategories")
export class TokenCategoryController extends TokenCategoryControllerBase {
  constructor(protected readonly service: TokenCategoryService) {
    super(service);
  }
}

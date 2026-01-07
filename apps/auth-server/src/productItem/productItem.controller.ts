import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProductItemService } from "./productItem.service";
import { ProductItemControllerBase } from "./base/productItem.controller.base";

@swagger.ApiTags("productItems")
@common.Controller("productItems")
export class ProductItemController extends ProductItemControllerBase {
  constructor(
    protected readonly service: ProductItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseItemService } from "./purchaseItem.service";
import { PurchaseItemControllerBase } from "./base/purchaseItem.controller.base";

@swagger.ApiTags("purchaseItems")
@common.Controller("purchaseItems")
export class PurchaseItemController extends PurchaseItemControllerBase {
  constructor(protected readonly service: PurchaseItemService) {
    super(service);
  }
}

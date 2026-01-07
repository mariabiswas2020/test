import { Module } from "@nestjs/common";
import { PurchaseItemModuleBase } from "./base/purchaseItem.module.base";
import { PurchaseItemService } from "./purchaseItem.service";
import { PurchaseItemController } from "./purchaseItem.controller";
import { PurchaseItemResolver } from "./purchaseItem.resolver";

@Module({
  imports: [PurchaseItemModuleBase],
  controllers: [PurchaseItemController],
  providers: [PurchaseItemService, PurchaseItemResolver],
  exports: [PurchaseItemService],
})
export class PurchaseItemModule {}

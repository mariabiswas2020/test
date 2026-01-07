import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PurchaseItemModuleBase } from "./base/purchaseItem.module.base";
import { PurchaseItemService } from "./purchaseItem.service";
import { PurchaseItemController } from "./purchaseItem.controller";
import { PurchaseItemResolver } from "./purchaseItem.resolver";

@Module({
  imports: [PurchaseItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [PurchaseItemController],
  providers: [PurchaseItemService, PurchaseItemResolver],
  exports: [PurchaseItemService],
})
export class PurchaseItemModule {}

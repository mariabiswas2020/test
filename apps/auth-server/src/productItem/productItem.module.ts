import { Module } from "@nestjs/common";
import { ProductItemModuleBase } from "./base/productItem.module.base";
import { ProductItemService } from "./productItem.service";
import { ProductItemController } from "./productItem.controller";
import { ProductItemResolver } from "./productItem.resolver";

@Module({
  imports: [ProductItemModuleBase],
  controllers: [ProductItemController],
  providers: [ProductItemService, ProductItemResolver],
  exports: [ProductItemService],
})
export class ProductItemModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProductItemModuleBase } from "./base/productItem.module.base";
import { ProductItemService } from "./productItem.service";
import { ProductItemController } from "./productItem.controller";
import { ProductItemResolver } from "./productItem.resolver";

@Module({
  imports: [ProductItemModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProductItemController],
  providers: [ProductItemService, ProductItemResolver],
  exports: [ProductItemService],
})
export class ProductItemModule {}

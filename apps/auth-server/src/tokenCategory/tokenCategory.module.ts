import { Module } from "@nestjs/common";
import { TokenCategoryModuleBase } from "./base/tokenCategory.module.base";
import { TokenCategoryService } from "./tokenCategory.service";
import { TokenCategoryController } from "./tokenCategory.controller";
import { TokenCategoryResolver } from "./tokenCategory.resolver";

@Module({
  imports: [TokenCategoryModuleBase],
  controllers: [TokenCategoryController],
  providers: [TokenCategoryService, TokenCategoryResolver],
  exports: [TokenCategoryService],
})
export class TokenCategoryModule {}

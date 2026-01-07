import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TokenCategoryModuleBase } from "./base/tokenCategory.module.base";
import { TokenCategoryService } from "./tokenCategory.service";
import { TokenCategoryController } from "./tokenCategory.controller";
import { TokenCategoryResolver } from "./tokenCategory.resolver";

@Module({
  imports: [TokenCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TokenCategoryController],
  providers: [TokenCategoryService, TokenCategoryResolver],
  exports: [TokenCategoryService],
})
export class TokenCategoryModule {}

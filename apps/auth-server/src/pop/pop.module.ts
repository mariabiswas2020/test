import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PopModuleBase } from "./base/pop.module.base";
import { PopService } from "./pop.service";
import { PopController } from "./pop.controller";
import { PopResolver } from "./pop.resolver";

@Module({
  imports: [PopModuleBase, forwardRef(() => AuthModule)],
  controllers: [PopController],
  providers: [PopService, PopResolver],
  exports: [PopService],
})
export class PopModule {}

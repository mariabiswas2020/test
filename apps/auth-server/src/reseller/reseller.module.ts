import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResellerModuleBase } from "./base/reseller.module.base";
import { ResellerService } from "./reseller.service";
import { ResellerController } from "./reseller.controller";
import { ResellerResolver } from "./reseller.resolver";

@Module({
  imports: [ResellerModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResellerController],
  providers: [ResellerService, ResellerResolver],
  exports: [ResellerService],
})
export class ResellerModule {}

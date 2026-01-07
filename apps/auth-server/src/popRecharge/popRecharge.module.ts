import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PopRechargeModuleBase } from "./base/popRecharge.module.base";
import { PopRechargeService } from "./popRecharge.service";
import { PopRechargeController } from "./popRecharge.controller";
import { PopRechargeResolver } from "./popRecharge.resolver";

@Module({
  imports: [PopRechargeModuleBase, forwardRef(() => AuthModule)],
  controllers: [PopRechargeController],
  providers: [PopRechargeService, PopRechargeResolver],
  exports: [PopRechargeService],
})
export class PopRechargeModule {}

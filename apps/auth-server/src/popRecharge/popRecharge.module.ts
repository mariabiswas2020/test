import { Module } from "@nestjs/common";
import { PopRechargeModuleBase } from "./base/popRecharge.module.base";
import { PopRechargeService } from "./popRecharge.service";
import { PopRechargeController } from "./popRecharge.controller";
import { PopRechargeResolver } from "./popRecharge.resolver";

@Module({
  imports: [PopRechargeModuleBase],
  controllers: [PopRechargeController],
  providers: [PopRechargeService, PopRechargeResolver],
  exports: [PopRechargeService],
})
export class PopRechargeModule {}

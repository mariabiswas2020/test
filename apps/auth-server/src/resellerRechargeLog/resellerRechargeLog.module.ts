import { Module } from "@nestjs/common";
import { ResellerRechargeLogModuleBase } from "./base/resellerRechargeLog.module.base";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";
import { ResellerRechargeLogController } from "./resellerRechargeLog.controller";
import { ResellerRechargeLogResolver } from "./resellerRechargeLog.resolver";

@Module({
  imports: [ResellerRechargeLogModuleBase],
  controllers: [ResellerRechargeLogController],
  providers: [ResellerRechargeLogService, ResellerRechargeLogResolver],
  exports: [ResellerRechargeLogService],
})
export class ResellerRechargeLogModule {}

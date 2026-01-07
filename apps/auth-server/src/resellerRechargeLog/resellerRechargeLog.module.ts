import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResellerRechargeLogModuleBase } from "./base/resellerRechargeLog.module.base";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";
import { ResellerRechargeLogController } from "./resellerRechargeLog.controller";
import { ResellerRechargeLogResolver } from "./resellerRechargeLog.resolver";

@Module({
  imports: [ResellerRechargeLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResellerRechargeLogController],
  providers: [ResellerRechargeLogService, ResellerRechargeLogResolver],
  exports: [ResellerRechargeLogService],
})
export class ResellerRechargeLogModule {}

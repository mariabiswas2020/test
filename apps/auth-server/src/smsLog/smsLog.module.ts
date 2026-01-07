import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmsLogModuleBase } from "./base/smsLog.module.base";
import { SmsLogService } from "./smsLog.service";
import { SmsLogController } from "./smsLog.controller";
import { SmsLogResolver } from "./smsLog.resolver";

@Module({
  imports: [SmsLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmsLogController],
  providers: [SmsLogService, SmsLogResolver],
  exports: [SmsLogService],
})
export class SmsLogModule {}

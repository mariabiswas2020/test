import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmsTemplateModuleBase } from "./base/smsTemplate.module.base";
import { SmsTemplateService } from "./smsTemplate.service";
import { SmsTemplateController } from "./smsTemplate.controller";
import { SmsTemplateResolver } from "./smsTemplate.resolver";

@Module({
  imports: [SmsTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmsTemplateController],
  providers: [SmsTemplateService, SmsTemplateResolver],
  exports: [SmsTemplateService],
})
export class SmsTemplateModule {}

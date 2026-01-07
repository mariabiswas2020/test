import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmsGatewayModuleBase } from "./base/smsGateway.module.base";
import { SmsGatewayService } from "./smsGateway.service";
import { SmsGatewayController } from "./smsGateway.controller";
import { SmsGatewayResolver } from "./smsGateway.resolver";

@Module({
  imports: [SmsGatewayModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmsGatewayController],
  providers: [SmsGatewayService, SmsGatewayResolver],
  exports: [SmsGatewayService],
})
export class SmsGatewayModule {}

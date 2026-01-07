import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { VerificationTokenModuleBase } from "./base/verificationToken.module.base";
import { VerificationTokenService } from "./verificationToken.service";
import { VerificationTokenController } from "./verificationToken.controller";
import { VerificationTokenResolver } from "./verificationToken.resolver";

@Module({
  imports: [VerificationTokenModuleBase, forwardRef(() => AuthModule)],
  controllers: [VerificationTokenController],
  providers: [VerificationTokenService, VerificationTokenResolver],
  exports: [VerificationTokenService],
})
export class VerificationTokenModule {}

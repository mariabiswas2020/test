import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CustomerSessionModuleBase } from "./base/customerSession.module.base";
import { CustomerSessionService } from "./customerSession.service";
import { CustomerSessionController } from "./customerSession.controller";
import { CustomerSessionResolver } from "./customerSession.resolver";

@Module({
  imports: [CustomerSessionModuleBase, forwardRef(() => AuthModule)],
  controllers: [CustomerSessionController],
  providers: [CustomerSessionService, CustomerSessionResolver],
  exports: [CustomerSessionService],
})
export class CustomerSessionModule {}

import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UsageModuleBase } from "./base/usage.module.base";
import { UsageService } from "./usage.service";
import { UsageController } from "./usage.controller";
import { UsageResolver } from "./usage.resolver";

@Module({
  imports: [UsageModuleBase, forwardRef(() => AuthModule)],
  controllers: [UsageController],
  providers: [UsageService, UsageResolver],
  exports: [UsageService],
})
export class UsageModule {}

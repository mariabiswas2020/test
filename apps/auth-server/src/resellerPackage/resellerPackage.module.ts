import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ResellerPackageModuleBase } from "./base/resellerPackage.module.base";
import { ResellerPackageService } from "./resellerPackage.service";
import { ResellerPackageController } from "./resellerPackage.controller";
import { ResellerPackageResolver } from "./resellerPackage.resolver";

@Module({
  imports: [ResellerPackageModuleBase, forwardRef(() => AuthModule)],
  controllers: [ResellerPackageController],
  providers: [ResellerPackageService, ResellerPackageResolver],
  exports: [ResellerPackageService],
})
export class ResellerPackageModule {}

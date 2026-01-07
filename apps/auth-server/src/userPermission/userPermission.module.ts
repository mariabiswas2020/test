import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { UserPermissionModuleBase } from "./base/userPermission.module.base";
import { UserPermissionService } from "./userPermission.service";
import { UserPermissionController } from "./userPermission.controller";
import { UserPermissionResolver } from "./userPermission.resolver";

@Module({
  imports: [UserPermissionModuleBase, forwardRef(() => AuthModule)],
  controllers: [UserPermissionController],
  providers: [UserPermissionService, UserPermissionResolver],
  exports: [UserPermissionService],
})
export class UserPermissionModule {}

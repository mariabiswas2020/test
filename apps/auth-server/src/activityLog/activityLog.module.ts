import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ActivityLogModuleBase } from "./base/activityLog.module.base";
import { ActivityLogService } from "./activityLog.service";
import { ActivityLogController } from "./activityLog.controller";
import { ActivityLogResolver } from "./activityLog.resolver";

@Module({
  imports: [ActivityLogModuleBase, forwardRef(() => AuthModule)],
  controllers: [ActivityLogController],
  providers: [ActivityLogService, ActivityLogResolver],
  exports: [ActivityLogService],
})
export class ActivityLogModule {}

import { Module } from "@nestjs/common";
import { ActivityLogModuleBase } from "./base/activityLog.module.base";
import { ActivityLogService } from "./activityLog.service";
import { ActivityLogController } from "./activityLog.controller";
import { ActivityLogResolver } from "./activityLog.resolver";

@Module({
  imports: [ActivityLogModuleBase],
  controllers: [ActivityLogController],
  providers: [ActivityLogService, ActivityLogResolver],
  exports: [ActivityLogService],
})
export class ActivityLogModule {}

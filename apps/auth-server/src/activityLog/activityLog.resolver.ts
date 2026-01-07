import * as graphql from "@nestjs/graphql";
import { ActivityLogResolverBase } from "./base/activityLog.resolver.base";
import { ActivityLog } from "./base/ActivityLog";
import { ActivityLogService } from "./activityLog.service";

@graphql.Resolver(() => ActivityLog)
export class ActivityLogResolver extends ActivityLogResolverBase {
  constructor(protected readonly service: ActivityLogService) {
    super(service);
  }
}

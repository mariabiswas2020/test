import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ActivityLogResolverBase } from "./base/activityLog.resolver.base";
import { ActivityLog } from "./base/ActivityLog";
import { ActivityLogService } from "./activityLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ActivityLog)
export class ActivityLogResolver extends ActivityLogResolverBase {
  constructor(
    protected readonly service: ActivityLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

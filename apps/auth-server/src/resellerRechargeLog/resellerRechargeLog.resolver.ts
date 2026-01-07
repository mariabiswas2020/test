import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResellerRechargeLogResolverBase } from "./base/resellerRechargeLog.resolver.base";
import { ResellerRechargeLog } from "./base/ResellerRechargeLog";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResellerRechargeLog)
export class ResellerRechargeLogResolver extends ResellerRechargeLogResolverBase {
  constructor(
    protected readonly service: ResellerRechargeLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PopRechargeResolverBase } from "./base/popRecharge.resolver.base";
import { PopRecharge } from "./base/PopRecharge";
import { PopRechargeService } from "./popRecharge.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PopRecharge)
export class PopRechargeResolver extends PopRechargeResolverBase {
  constructor(
    protected readonly service: PopRechargeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

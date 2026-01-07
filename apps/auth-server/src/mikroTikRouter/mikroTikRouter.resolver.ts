import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MikroTikRouterResolverBase } from "./base/mikroTikRouter.resolver.base";
import { MikroTikRouter } from "./base/MikroTikRouter";
import { MikroTikRouterService } from "./mikroTikRouter.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MikroTikRouter)
export class MikroTikRouterResolver extends MikroTikRouterResolverBase {
  constructor(
    protected readonly service: MikroTikRouterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

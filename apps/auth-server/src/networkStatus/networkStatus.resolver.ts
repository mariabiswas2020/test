import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { NetworkStatusResolverBase } from "./base/networkStatus.resolver.base";
import { NetworkStatus } from "./base/NetworkStatus";
import { NetworkStatusService } from "./networkStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => NetworkStatus)
export class NetworkStatusResolver extends NetworkStatusResolverBase {
  constructor(
    protected readonly service: NetworkStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

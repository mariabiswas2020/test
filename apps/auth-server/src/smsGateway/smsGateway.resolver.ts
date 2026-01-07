import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { SmsGatewayResolverBase } from "./base/smsGateway.resolver.base";
import { SmsGateway } from "./base/SmsGateway";
import { SmsGatewayService } from "./smsGateway.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => SmsGateway)
export class SmsGatewayResolver extends SmsGatewayResolverBase {
  constructor(
    protected readonly service: SmsGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { MarketingLeadResolverBase } from "./base/marketingLead.resolver.base";
import { MarketingLead } from "./base/MarketingLead";
import { MarketingLeadService } from "./marketingLead.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => MarketingLead)
export class MarketingLeadResolver extends MarketingLeadResolverBase {
  constructor(
    protected readonly service: MarketingLeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

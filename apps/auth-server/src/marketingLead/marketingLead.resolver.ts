import * as graphql from "@nestjs/graphql";
import { MarketingLeadResolverBase } from "./base/marketingLead.resolver.base";
import { MarketingLead } from "./base/MarketingLead";
import { MarketingLeadService } from "./marketingLead.service";

@graphql.Resolver(() => MarketingLead)
export class MarketingLeadResolver extends MarketingLeadResolverBase {
  constructor(protected readonly service: MarketingLeadService) {
    super(service);
  }
}

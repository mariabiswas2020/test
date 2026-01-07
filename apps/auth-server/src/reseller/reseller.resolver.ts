import * as graphql from "@nestjs/graphql";
import { ResellerResolverBase } from "./base/reseller.resolver.base";
import { Reseller } from "./base/Reseller";
import { ResellerService } from "./reseller.service";

@graphql.Resolver(() => Reseller)
export class ResellerResolver extends ResellerResolverBase {
  constructor(protected readonly service: ResellerService) {
    super(service);
  }
}

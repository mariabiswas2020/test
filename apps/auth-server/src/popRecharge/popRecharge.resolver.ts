import * as graphql from "@nestjs/graphql";
import { PopRechargeResolverBase } from "./base/popRecharge.resolver.base";
import { PopRecharge } from "./base/PopRecharge";
import { PopRechargeService } from "./popRecharge.service";

@graphql.Resolver(() => PopRecharge)
export class PopRechargeResolver extends PopRechargeResolverBase {
  constructor(protected readonly service: PopRechargeService) {
    super(service);
  }
}

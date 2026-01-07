import * as graphql from "@nestjs/graphql";
import { PopResolverBase } from "./base/pop.resolver.base";
import { Pop } from "./base/Pop";
import { PopService } from "./pop.service";

@graphql.Resolver(() => Pop)
export class PopResolver extends PopResolverBase {
  constructor(protected readonly service: PopService) {
    super(service);
  }
}

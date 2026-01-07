import * as graphql from "@nestjs/graphql";
import { TokenCategoryResolverBase } from "./base/tokenCategory.resolver.base";
import { TokenCategory } from "./base/TokenCategory";
import { TokenCategoryService } from "./tokenCategory.service";

@graphql.Resolver(() => TokenCategory)
export class TokenCategoryResolver extends TokenCategoryResolverBase {
  constructor(protected readonly service: TokenCategoryService) {
    super(service);
  }
}

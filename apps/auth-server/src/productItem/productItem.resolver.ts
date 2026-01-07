import * as graphql from "@nestjs/graphql";
import { ProductItemResolverBase } from "./base/productItem.resolver.base";
import { ProductItem } from "./base/ProductItem";
import { ProductItemService } from "./productItem.service";

@graphql.Resolver(() => ProductItem)
export class ProductItemResolver extends ProductItemResolverBase {
  constructor(protected readonly service: ProductItemService) {
    super(service);
  }
}

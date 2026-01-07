import * as graphql from "@nestjs/graphql";
import { PurchaseItemResolverBase } from "./base/purchaseItem.resolver.base";
import { PurchaseItem } from "./base/PurchaseItem";
import { PurchaseItemService } from "./purchaseItem.service";

@graphql.Resolver(() => PurchaseItem)
export class PurchaseItemResolver extends PurchaseItemResolverBase {
  constructor(protected readonly service: PurchaseItemService) {
    super(service);
  }
}

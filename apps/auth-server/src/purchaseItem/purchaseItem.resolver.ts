import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { PurchaseItemResolverBase } from "./base/purchaseItem.resolver.base";
import { PurchaseItem } from "./base/PurchaseItem";
import { PurchaseItemService } from "./purchaseItem.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => PurchaseItem)
export class PurchaseItemResolver extends PurchaseItemResolverBase {
  constructor(
    protected readonly service: PurchaseItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

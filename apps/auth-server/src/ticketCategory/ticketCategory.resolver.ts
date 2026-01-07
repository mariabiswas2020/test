import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { TicketCategoryResolverBase } from "./base/ticketCategory.resolver.base";
import { TicketCategory } from "./base/TicketCategory";
import { TicketCategoryService } from "./ticketCategory.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => TicketCategory)
export class TicketCategoryResolver extends TicketCategoryResolverBase {
  constructor(
    protected readonly service: TicketCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

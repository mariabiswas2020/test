import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ResellerPackageResolverBase } from "./base/resellerPackage.resolver.base";
import { ResellerPackage } from "./base/ResellerPackage";
import { ResellerPackageService } from "./resellerPackage.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ResellerPackage)
export class ResellerPackageResolver extends ResellerPackageResolverBase {
  constructor(
    protected readonly service: ResellerPackageService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

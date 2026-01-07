import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { UserPermissionResolverBase } from "./base/userPermission.resolver.base";
import { UserPermission } from "./base/UserPermission";
import { UserPermissionService } from "./userPermission.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => UserPermission)
export class UserPermissionResolver extends UserPermissionResolverBase {
  constructor(
    protected readonly service: UserPermissionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

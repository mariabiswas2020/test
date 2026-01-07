import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { VerificationTokenResolverBase } from "./base/verificationToken.resolver.base";
import { VerificationToken } from "./base/VerificationToken";
import { VerificationTokenService } from "./verificationToken.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => VerificationToken)
export class VerificationTokenResolver extends VerificationTokenResolverBase {
  constructor(
    protected readonly service: VerificationTokenService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

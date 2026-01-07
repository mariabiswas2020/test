import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MikroTikRouterService } from "./mikroTikRouter.service";
import { MikroTikRouterControllerBase } from "./base/mikroTikRouter.controller.base";

@swagger.ApiTags("mikroTikRouters")
@common.Controller("mikroTikRouters")
export class MikroTikRouterController extends MikroTikRouterControllerBase {
  constructor(
    protected readonly service: MikroTikRouterService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

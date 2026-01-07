import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NetworkStatusService } from "./networkStatus.service";
import { NetworkStatusControllerBase } from "./base/networkStatus.controller.base";

@swagger.ApiTags("networkStatuses")
@common.Controller("networkStatuses")
export class NetworkStatusController extends NetworkStatusControllerBase {
  constructor(
    protected readonly service: NetworkStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

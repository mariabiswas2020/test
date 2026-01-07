import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmsGatewayService } from "./smsGateway.service";
import { SmsGatewayControllerBase } from "./base/smsGateway.controller.base";

@swagger.ApiTags("smsGateways")
@common.Controller("smsGateways")
export class SmsGatewayController extends SmsGatewayControllerBase {
  constructor(
    protected readonly service: SmsGatewayService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

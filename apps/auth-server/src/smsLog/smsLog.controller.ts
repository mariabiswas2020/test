import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmsLogService } from "./smsLog.service";
import { SmsLogControllerBase } from "./base/smsLog.controller.base";

@swagger.ApiTags("smsLogs")
@common.Controller("smsLogs")
export class SmsLogController extends SmsLogControllerBase {
  constructor(
    protected readonly service: SmsLogService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

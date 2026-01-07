import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SmsTemplateService } from "./smsTemplate.service";
import { SmsTemplateControllerBase } from "./base/smsTemplate.controller.base";

@swagger.ApiTags("smsTemplates")
@common.Controller("smsTemplates")
export class SmsTemplateController extends SmsTemplateControllerBase {
  constructor(
    protected readonly service: SmsTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

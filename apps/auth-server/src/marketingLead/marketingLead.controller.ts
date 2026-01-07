import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MarketingLeadService } from "./marketingLead.service";
import { MarketingLeadControllerBase } from "./base/marketingLead.controller.base";

@swagger.ApiTags("marketingLeads")
@common.Controller("marketingLeads")
export class MarketingLeadController extends MarketingLeadControllerBase {
  constructor(
    protected readonly service: MarketingLeadService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

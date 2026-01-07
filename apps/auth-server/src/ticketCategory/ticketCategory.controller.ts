import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TicketCategoryService } from "./ticketCategory.service";
import { TicketCategoryControllerBase } from "./base/ticketCategory.controller.base";

@swagger.ApiTags("ticketCategories")
@common.Controller("ticketCategories")
export class TicketCategoryController extends TicketCategoryControllerBase {
  constructor(
    protected readonly service: TicketCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}

import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PopService } from "./pop.service";
import { PopControllerBase } from "./base/pop.controller.base";

@swagger.ApiTags("pops")
@common.Controller("pops")
export class PopController extends PopControllerBase {
  constructor(protected readonly service: PopService) {
    super(service);
  }
}

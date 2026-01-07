import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlanModuleBase } from "./base/plan.module.base";
import { PlanService } from "./plan.service";
import { PlanController } from "./plan.controller";
import { PlanResolver } from "./plan.resolver";

@Module({
  imports: [PlanModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlanController],
  providers: [PlanService, PlanResolver],
  exports: [PlanService],
})
export class PlanModule {}

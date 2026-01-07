import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MarketingLeadModuleBase } from "./base/marketingLead.module.base";
import { MarketingLeadService } from "./marketingLead.service";
import { MarketingLeadController } from "./marketingLead.controller";
import { MarketingLeadResolver } from "./marketingLead.resolver";

@Module({
  imports: [MarketingLeadModuleBase, forwardRef(() => AuthModule)],
  controllers: [MarketingLeadController],
  providers: [MarketingLeadService, MarketingLeadResolver],
  exports: [MarketingLeadService],
})
export class MarketingLeadModule {}

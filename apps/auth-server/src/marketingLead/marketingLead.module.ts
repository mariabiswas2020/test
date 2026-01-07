import { Module } from "@nestjs/common";
import { MarketingLeadModuleBase } from "./base/marketingLead.module.base";
import { MarketingLeadService } from "./marketingLead.service";
import { MarketingLeadController } from "./marketingLead.controller";
import { MarketingLeadResolver } from "./marketingLead.resolver";

@Module({
  imports: [MarketingLeadModuleBase],
  controllers: [MarketingLeadController],
  providers: [MarketingLeadService, MarketingLeadResolver],
  exports: [MarketingLeadService],
})
export class MarketingLeadModule {}

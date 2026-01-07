import { Module } from "@nestjs/common";
import { ResellerModuleBase } from "./base/reseller.module.base";
import { ResellerService } from "./reseller.service";
import { ResellerController } from "./reseller.controller";
import { ResellerResolver } from "./reseller.resolver";

@Module({
  imports: [ResellerModuleBase],
  controllers: [ResellerController],
  providers: [ResellerService, ResellerResolver],
  exports: [ResellerService],
})
export class ResellerModule {}

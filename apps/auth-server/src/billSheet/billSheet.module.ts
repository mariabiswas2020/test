import { Module } from "@nestjs/common";
import { BillSheetModuleBase } from "./base/billSheet.module.base";
import { BillSheetService } from "./billSheet.service";
import { BillSheetController } from "./billSheet.controller";
import { BillSheetResolver } from "./billSheet.resolver";

@Module({
  imports: [BillSheetModuleBase],
  controllers: [BillSheetController],
  providers: [BillSheetService, BillSheetResolver],
  exports: [BillSheetService],
})
export class BillSheetModule {}

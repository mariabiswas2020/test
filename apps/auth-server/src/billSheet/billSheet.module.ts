import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BillSheetModuleBase } from "./base/billSheet.module.base";
import { BillSheetService } from "./billSheet.service";
import { BillSheetController } from "./billSheet.controller";
import { BillSheetResolver } from "./billSheet.resolver";

@Module({
  imports: [BillSheetModuleBase, forwardRef(() => AuthModule)],
  controllers: [BillSheetController],
  providers: [BillSheetService, BillSheetResolver],
  exports: [BillSheetService],
})
export class BillSheetModule {}

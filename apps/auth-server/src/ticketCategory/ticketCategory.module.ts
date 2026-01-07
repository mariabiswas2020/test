import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TicketCategoryModuleBase } from "./base/ticketCategory.module.base";
import { TicketCategoryService } from "./ticketCategory.service";
import { TicketCategoryController } from "./ticketCategory.controller";
import { TicketCategoryResolver } from "./ticketCategory.resolver";

@Module({
  imports: [TicketCategoryModuleBase, forwardRef(() => AuthModule)],
  controllers: [TicketCategoryController],
  providers: [TicketCategoryService, TicketCategoryResolver],
  exports: [TicketCategoryService],
})
export class TicketCategoryModule {}

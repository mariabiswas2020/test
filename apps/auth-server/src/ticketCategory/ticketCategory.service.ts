import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TicketCategoryServiceBase } from "./base/ticketCategory.service.base";

@Injectable()
export class TicketCategoryService extends TicketCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

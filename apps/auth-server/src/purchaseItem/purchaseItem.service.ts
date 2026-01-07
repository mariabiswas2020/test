import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseItemServiceBase } from "./base/purchaseItem.service.base";

@Injectable()
export class PurchaseItemService extends PurchaseItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

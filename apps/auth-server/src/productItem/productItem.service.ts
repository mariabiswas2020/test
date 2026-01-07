import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProductItemServiceBase } from "./base/productItem.service.base";

@Injectable()
export class ProductItemService extends ProductItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

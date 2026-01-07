import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BillSheetServiceBase } from "./base/billSheet.service.base";

@Injectable()
export class BillSheetService extends BillSheetServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

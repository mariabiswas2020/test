import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PopRechargeServiceBase } from "./base/popRecharge.service.base";

@Injectable()
export class PopRechargeService extends PopRechargeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

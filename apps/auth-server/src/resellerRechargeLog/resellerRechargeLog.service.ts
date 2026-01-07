import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResellerRechargeLogServiceBase } from "./base/resellerRechargeLog.service.base";

@Injectable()
export class ResellerRechargeLogService extends ResellerRechargeLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

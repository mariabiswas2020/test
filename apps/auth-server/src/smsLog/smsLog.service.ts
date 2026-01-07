import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmsLogServiceBase } from "./base/smsLog.service.base";

@Injectable()
export class SmsLogService extends SmsLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

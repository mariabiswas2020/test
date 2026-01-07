import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmsTemplateServiceBase } from "./base/smsTemplate.service.base";

@Injectable()
export class SmsTemplateService extends SmsTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

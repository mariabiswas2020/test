import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SmsGatewayServiceBase } from "./base/smsGateway.service.base";

@Injectable()
export class SmsGatewayService extends SmsGatewayServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

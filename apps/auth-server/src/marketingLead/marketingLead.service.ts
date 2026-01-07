import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MarketingLeadServiceBase } from "./base/marketingLead.service.base";

@Injectable()
export class MarketingLeadService extends MarketingLeadServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

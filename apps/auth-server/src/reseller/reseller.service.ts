import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResellerServiceBase } from "./base/reseller.service.base";

@Injectable()
export class ResellerService extends ResellerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

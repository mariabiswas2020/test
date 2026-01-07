import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CustomerSessionServiceBase } from "./base/customerSession.service.base";

@Injectable()
export class CustomerSessionService extends CustomerSessionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

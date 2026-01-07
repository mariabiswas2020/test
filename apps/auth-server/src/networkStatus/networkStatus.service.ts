import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { NetworkStatusServiceBase } from "./base/networkStatus.service.base";

@Injectable()
export class NetworkStatusService extends NetworkStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

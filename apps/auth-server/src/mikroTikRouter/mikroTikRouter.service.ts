import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MikroTikRouterServiceBase } from "./base/mikroTikRouter.service.base";

@Injectable()
export class MikroTikRouterService extends MikroTikRouterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

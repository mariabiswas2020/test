import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PopServiceBase } from "./base/pop.service.base";

@Injectable()
export class PopService extends PopServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

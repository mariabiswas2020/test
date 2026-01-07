import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResellerPackageServiceBase } from "./base/resellerPackage.service.base";

@Injectable()
export class ResellerPackageService extends ResellerPackageServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

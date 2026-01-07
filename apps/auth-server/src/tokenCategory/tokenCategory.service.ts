import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TokenCategoryServiceBase } from "./base/tokenCategory.service.base";

@Injectable()
export class TokenCategoryService extends TokenCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ActivityLogServiceBase } from "./base/activityLog.service.base";

@Injectable()
export class ActivityLogService extends ActivityLogServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import * as graphql from "@nestjs/graphql";
import { ResellerRechargeLogResolverBase } from "./base/resellerRechargeLog.resolver.base";
import { ResellerRechargeLog } from "./base/ResellerRechargeLog";
import { ResellerRechargeLogService } from "./resellerRechargeLog.service";

@graphql.Resolver(() => ResellerRechargeLog)
export class ResellerRechargeLogResolver extends ResellerRechargeLogResolverBase {
  constructor(protected readonly service: ResellerRechargeLogService) {
    super(service);
  }
}

import * as graphql from "@nestjs/graphql";
import { BillSheetResolverBase } from "./base/billSheet.resolver.base";
import { BillSheet } from "./base/BillSheet";
import { BillSheetService } from "./billSheet.service";

@graphql.Resolver(() => BillSheet)
export class BillSheetResolver extends BillSheetResolverBase {
  constructor(protected readonly service: BillSheetService) {
    super(service);
  }
}

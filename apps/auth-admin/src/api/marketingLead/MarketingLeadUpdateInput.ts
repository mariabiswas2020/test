import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { Decimal } from "decimal.js";

export type MarketingLeadUpdateInput = {
  address?: string | null;
  agent?: UserWhereUniqueInput;
  mapLocation?: string | null;
  name?: string;
  phone?: string;
  priceQuote?: Decimal | null;
  proposedPackage?: string | null;
  remarks?: string | null;
  status?: "NEW" | "CONTACTED" | "SUCCESS" | "REJECTED";
};

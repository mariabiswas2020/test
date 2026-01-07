import { ResellerPackageUpdateManyWithoutResellersInput } from "./ResellerPackageUpdateManyWithoutResellersInput";
import { Decimal } from "decimal.js";
import { PopUpdateManyWithoutResellersInput } from "./PopUpdateManyWithoutResellersInput";
import { ResellerRechargeLogUpdateManyWithoutResellersInput } from "./ResellerRechargeLogUpdateManyWithoutResellersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResellerUpdateInput = {
  assignedPackages?: ResellerPackageUpdateManyWithoutResellersInput;
  balance?: Decimal;
  businessName?: string | null;
  pops?: PopUpdateManyWithoutResellersInput;
  rechargeLogs?: ResellerRechargeLogUpdateManyWithoutResellersInput;
  user?: UserWhereUniqueInput;
};

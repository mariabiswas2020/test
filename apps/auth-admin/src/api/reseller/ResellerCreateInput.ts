import { Decimal } from "decimal.js";
import { PopCreateNestedManyWithoutResellersInput } from "./PopCreateNestedManyWithoutResellersInput";
import { ResellerRechargeLogCreateNestedManyWithoutResellersInput } from "./ResellerRechargeLogCreateNestedManyWithoutResellersInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResellerCreateInput = {
  balance: Decimal;
  businessName?: string | null;
  pops?: PopCreateNestedManyWithoutResellersInput;
  rechargeLogs?: ResellerRechargeLogCreateNestedManyWithoutResellersInput;
  user: UserWhereUniqueInput;
};

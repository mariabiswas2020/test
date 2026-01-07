import { Decimal } from "decimal.js";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";

export type ResellerRechargeLogUpdateInput = {
  amount?: Decimal;
  note?: string | null;
  reseller?: ResellerWhereUniqueInput;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
};

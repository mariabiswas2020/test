import { Decimal } from "decimal.js";
import { Reseller } from "../reseller/Reseller";

export type ResellerRechargeLog = {
  amount: Decimal;
  date: Date;
  id: string;
  note: string | null;
  reseller?: Reseller;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
};

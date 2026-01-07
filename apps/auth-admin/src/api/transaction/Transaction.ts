import { Decimal } from "decimal.js";
import { User } from "../user/User";
import { Customer } from "../customer/Customer";

export type Transaction = {
  amount: Decimal;
  collector?: User | null;
  customer?: Customer;
  date: Date;
  discount: Decimal;
  id: string;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  note: string | null;
  trxId: string | null;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
};

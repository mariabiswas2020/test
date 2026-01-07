import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: Decimal;
  collector?: UserWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput;
  deletedAt?: Date | null;
  discount?: Decimal;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  note?: string | null;
  trxId?: string | null;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
};

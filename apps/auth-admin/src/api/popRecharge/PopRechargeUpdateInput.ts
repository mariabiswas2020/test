import { Decimal } from "decimal.js";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type PopRechargeUpdateInput = {
  amount?: Decimal;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedBy?: string | null;
  pop?: PopWhereUniqueInput;
  reference?: string | null;
};

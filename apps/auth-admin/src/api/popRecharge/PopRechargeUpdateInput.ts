import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type PopRechargeUpdateInput = {
  amount?: Decimal;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedByUser?: UserWhereUniqueInput | null;
  pop?: PopWhereUniqueInput;
  reference?: string | null;
};

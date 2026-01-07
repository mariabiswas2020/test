import { Decimal } from "decimal.js";
import { Pop } from "../pop/Pop";

export type PopRecharge = {
  amount: Decimal;
  date: Date;
  id: string;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedBy: string | null;
  pop?: Pop;
  reference: string | null;
};

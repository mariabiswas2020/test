import { Decimal } from "decimal.js";
import { User } from "../user/User";
import { Pop } from "../pop/Pop";

export type PopRecharge = {
  amount: Decimal;
  createdAt: Date;
  date: Date;
  id: string;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedByUser?: User | null;
  pop?: Pop;
  reference: string | null;
  updatedAt: Date;
};

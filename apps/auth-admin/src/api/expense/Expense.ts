import { Decimal } from "decimal.js";
import { Pop } from "../pop/Pop";

export type Expense = {
  addedBy: string;
  amount: Decimal;
  category: string | null;
  date: Date;
  id: string;
  pop?: Pop | null;
  title: string;
};

import { User } from "../user/User";
import { Decimal } from "decimal.js";
import { Pop } from "../pop/Pop";

export type Expense = {
  addedByUser?: User;
  amount: Decimal;
  category: string | null;
  createdAt: Date;
  date: Date;
  id: string;
  pop?: Pop | null;
  title: string;
  updatedAt: Date;
};

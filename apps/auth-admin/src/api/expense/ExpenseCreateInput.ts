import { Decimal } from "decimal.js";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type ExpenseCreateInput = {
  addedBy: string;
  amount: Decimal;
  category?: string | null;
  pop?: PopWhereUniqueInput | null;
  title: string;
};

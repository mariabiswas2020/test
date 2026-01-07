import { Decimal } from "decimal.js";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type ExpenseUpdateInput = {
  addedBy?: string;
  amount?: Decimal;
  category?: string | null;
  pop?: PopWhereUniqueInput | null;
  title?: string;
};

import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { Decimal } from "decimal.js";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type ExpenseUpdateInput = {
  addedByUser?: UserWhereUniqueInput;
  amount?: Decimal;
  category?: string | null;
  pop?: PopWhereUniqueInput | null;
  title?: string;
};

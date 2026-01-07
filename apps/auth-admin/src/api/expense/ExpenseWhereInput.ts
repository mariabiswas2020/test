import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type ExpenseWhereInput = {
  addedBy?: StringFilter;
  amount?: DecimalFilter;
  category?: StringNullableFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  pop?: PopWhereUniqueInput;
  title?: StringFilter;
};

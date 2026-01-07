import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type ExpenseWhereInput = {
  addedByUser?: UserWhereUniqueInput;
  amount?: DecimalFilter;
  category?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  pop?: PopWhereUniqueInput;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
};

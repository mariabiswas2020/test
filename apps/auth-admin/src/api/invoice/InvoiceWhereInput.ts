import { FloatFilter } from "../../util/FloatFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceWhereInput = {
  amount?: FloatFilter;
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  dueDate?: DateTimeFilter;
  id?: StringFilter;
  paidDate?: DateTimeNullableFilter;
  status?: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

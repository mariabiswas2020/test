import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type PopRechargeWhereInput = {
  amount?: DecimalFilter;
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedByUser?: UserWhereUniqueInput;
  pop?: PopWhereUniqueInput;
  reference?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};

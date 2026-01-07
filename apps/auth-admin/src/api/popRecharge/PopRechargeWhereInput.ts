import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type PopRechargeWhereInput = {
  amount?: DecimalFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  performedBy?: StringNullableFilter;
  pop?: PopWhereUniqueInput;
  reference?: StringNullableFilter;
};

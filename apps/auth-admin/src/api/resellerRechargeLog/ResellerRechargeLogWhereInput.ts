import { DecimalFilter } from "../../util/DecimalFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";

export type ResellerRechargeLogWhereInput = {
  amount?: DecimalFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  note?: StringNullableFilter;
  reseller?: ResellerWhereUniqueInput;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
};

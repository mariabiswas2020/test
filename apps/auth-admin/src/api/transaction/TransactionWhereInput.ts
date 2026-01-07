import { DecimalFilter } from "../../util/DecimalFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TransactionWhereInput = {
  amount?: DecimalFilter;
  collector?: UserWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  date?: DateTimeFilter;
  deletedAt?: DateTimeNullableFilter;
  discount?: DecimalFilter;
  id?: StringFilter;
  method?: "CASH" | "BKASH" | "NAGAD" | "ROCKET" | "BANK";
  note?: StringNullableFilter;
  trxId?: StringNullableFilter;
  type?: "BILL_PAYMENT" | "CONNECTION_FEE" | "OPENING_BALANCE" | "ADJUSTMENT";
  updatedAt?: DateTimeFilter;
};

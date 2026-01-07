import { BigIntFilter } from "../../util/BigIntFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";

export type CustomerSessionWhereInput = {
  bytesIn?: BigIntFilter;
  bytesOut?: BigIntFilter;
  customer?: CustomerWhereUniqueInput;
  endedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  lastSeenAt?: DateTimeFilter;
  macAddress?: StringNullableFilter;
  sessionId?: StringNullableFilter;
  startedAt?: DateTimeFilter;
};

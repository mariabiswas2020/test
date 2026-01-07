import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";

export type MarketingLeadWhereInput = {
  address?: StringNullableFilter;
  agent?: UserWhereUniqueInput;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  mapLocation?: StringNullableFilter;
  name?: StringFilter;
  phone?: StringFilter;
  priceQuote?: DecimalNullableFilter;
  proposedPackage?: StringNullableFilter;
  remarks?: StringNullableFilter;
  status?: "NEW" | "CONTACTED" | "SUCCESS" | "REJECTED";
};

import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityLogWhereInput = {
  action?: StringFilter;
  createdAt?: DateTimeFilter;
  details?: JsonFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};

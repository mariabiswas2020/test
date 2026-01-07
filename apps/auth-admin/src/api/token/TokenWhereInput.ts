import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TokenCategoryWhereUniqueInput } from "../tokenCategory/TokenCategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TokenWhereInput = {
  assignee?: UserWhereUniqueInput;
  category?: TokenCategoryWhereUniqueInput;
  closedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  ticketNo?: StringFilter;
};

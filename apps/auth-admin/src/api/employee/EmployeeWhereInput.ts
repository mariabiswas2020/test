import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeWhereInput = {
  address?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  designation?: StringFilter;
  id?: StringFilter;
  joinDate?: DateTimeFilter;
  nid?: StringNullableFilter;
  salary?: DecimalNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

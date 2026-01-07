import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DecimalNullableFilter } from "../../util/DecimalNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeWhereInput = {
  address?: StringNullableFilter;
  designation?: StringFilter;
  id?: StringFilter;
  joinDate?: DateTimeFilter;
  nid?: StringNullableFilter;
  salary?: DecimalNullableFilter;
  user?: UserWhereUniqueInput;
};

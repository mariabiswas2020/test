import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPermissionWhereInput = {
  grantedAt?: DateTimeFilter;
  grantedBy?: StringNullableFilter;
  id?: StringFilter;
  permission?: PermissionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

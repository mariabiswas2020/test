import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserPermissionListRelationFilter } from "../userPermission/UserPermissionListRelationFilter";

export type PermissionWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  route?: StringFilter;
  updatedAt?: DateTimeFilter;
  users?: UserPermissionListRelationFilter;
};

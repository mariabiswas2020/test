import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPermissionCreateInput = {
  grantedBy?: string | null;
  permission: PermissionWhereUniqueInput;
  user: UserWhereUniqueInput;
};

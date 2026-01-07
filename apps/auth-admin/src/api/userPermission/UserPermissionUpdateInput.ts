import { PermissionWhereUniqueInput } from "../permission/PermissionWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UserPermissionUpdateInput = {
  grantedBy?: string | null;
  permission?: PermissionWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

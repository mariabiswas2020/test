import { Permission } from "../permission/Permission";
import { User } from "../user/User";

export type UserPermission = {
  grantedAt: Date;
  grantedBy: string | null;
  id: string;
  permission?: Permission;
  user?: User;
};

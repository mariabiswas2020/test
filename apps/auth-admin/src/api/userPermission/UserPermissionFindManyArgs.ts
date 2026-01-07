import { UserPermissionWhereInput } from "./UserPermissionWhereInput";
import { UserPermissionOrderByInput } from "./UserPermissionOrderByInput";

export type UserPermissionFindManyArgs = {
  where?: UserPermissionWhereInput;
  orderBy?: Array<UserPermissionOrderByInput>;
  skip?: number;
  take?: number;
};

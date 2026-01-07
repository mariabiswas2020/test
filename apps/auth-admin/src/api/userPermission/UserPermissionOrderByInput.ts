import { SortOrder } from "../../util/SortOrder";

export type UserPermissionOrderByInput = {
  grantedAt?: SortOrder;
  grantedBy?: SortOrder;
  id?: SortOrder;
  permissionId?: SortOrder;
  userId?: SortOrder;
};

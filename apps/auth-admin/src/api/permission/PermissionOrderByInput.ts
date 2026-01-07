import { SortOrder } from "../../util/SortOrder";

export type PermissionOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  route?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ActivityLogOrderByInput = {
  action?: SortOrder;
  createdAt?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  userId?: SortOrder;
};

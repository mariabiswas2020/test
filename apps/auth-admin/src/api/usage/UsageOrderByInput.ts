import { SortOrder } from "../../util/SortOrder";

export type UsageOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  download?: SortOrder;
  id?: SortOrder;
  total?: SortOrder;
  upload?: SortOrder;
  userId?: SortOrder;
};

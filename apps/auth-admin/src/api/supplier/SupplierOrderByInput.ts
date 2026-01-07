import { SortOrder } from "../../util/SortOrder";

export type SupplierOrderByInput = {
  company?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};

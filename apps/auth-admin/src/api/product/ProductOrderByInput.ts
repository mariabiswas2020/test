import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  hasWarranty?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
  warrantyDays?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brand?: SortOrder;
  category?: SortOrder;
  hasWarranty?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  unit?: SortOrder;
  warrantyDays?: SortOrder;
};

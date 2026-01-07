import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  date?: SortOrder;
  id?: SortOrder;
  invoiceNo?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
};

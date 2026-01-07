import { SortOrder } from "../../util/SortOrder";

export type PurchaseOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  invoiceNo?: SortOrder;
  supplierId?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};

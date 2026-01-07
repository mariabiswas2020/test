import { SortOrder } from "../../util/SortOrder";

export type PurchaseItemOrderByInput = {
  id?: SortOrder;
  productId?: SortOrder;
  purchaseId?: SortOrder;
  quantity?: SortOrder;
  unitPrice?: SortOrder;
};

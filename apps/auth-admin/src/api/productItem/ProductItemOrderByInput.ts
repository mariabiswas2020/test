import { SortOrder } from "../../util/SortOrder";

export type ProductItemOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isUsedProduct?: SortOrder;
  locationPopId?: SortOrder;
  productId?: SortOrder;
  purchaseId?: SortOrder;
  serialNumber?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};

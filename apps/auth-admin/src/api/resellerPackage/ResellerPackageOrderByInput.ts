import { SortOrder } from "../../util/SortOrder";

export type ResellerPackageOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  packageId?: SortOrder;
  resellerId?: SortOrder;
  updatedAt?: SortOrder;
  wholesalePrice?: SortOrder;
};

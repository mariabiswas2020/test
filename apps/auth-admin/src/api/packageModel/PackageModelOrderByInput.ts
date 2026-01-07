import { SortOrder } from "../../util/SortOrder";

export type PackageModelOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  mikroTikProfile?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  speed?: SortOrder;
  type?: SortOrder;
  updatedAt?: SortOrder;
};

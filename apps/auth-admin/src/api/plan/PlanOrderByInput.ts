import { SortOrder } from "../../util/SortOrder";

export type PlanOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  features?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  speed?: SortOrder;
  speedDisplay?: SortOrder;
  updatedAt?: SortOrder;
};

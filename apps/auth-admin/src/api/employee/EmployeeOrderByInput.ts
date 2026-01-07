import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  designation?: SortOrder;
  id?: SortOrder;
  joinDate?: SortOrder;
  nid?: SortOrder;
  salary?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

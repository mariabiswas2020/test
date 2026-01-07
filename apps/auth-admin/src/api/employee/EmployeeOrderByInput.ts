import { SortOrder } from "../../util/SortOrder";

export type EmployeeOrderByInput = {
  address?: SortOrder;
  designation?: SortOrder;
  id?: SortOrder;
  joinDate?: SortOrder;
  nid?: SortOrder;
  salary?: SortOrder;
  userId?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  addedBy?: SortOrder;
  amount?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  popId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type ExpenseOrderByInput = {
  addedBy?: SortOrder;
  amount?: SortOrder;
  category?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  popId?: SortOrder;
  title?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  collectedBy?: SortOrder;
  customerId?: SortOrder;
  date?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  note?: SortOrder;
  trxId?: SortOrder;
  type?: SortOrder;
};

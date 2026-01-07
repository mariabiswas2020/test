import { SortOrder } from "../../util/SortOrder";

export type PopRechargeOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  performedBy?: SortOrder;
  popId?: SortOrder;
  reference?: SortOrder;
  updatedAt?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type PopRechargeOrderByInput = {
  amount?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  method?: SortOrder;
  performedBy?: SortOrder;
  popId?: SortOrder;
  reference?: SortOrder;
};

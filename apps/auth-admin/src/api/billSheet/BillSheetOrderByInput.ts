import { SortOrder } from "../../util/SortOrder";

export type BillSheetOrderByInput = {
  customerId?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  month?: SortOrder;
  payable?: SortOrder;
  status?: SortOrder;
  year?: SortOrder;
};

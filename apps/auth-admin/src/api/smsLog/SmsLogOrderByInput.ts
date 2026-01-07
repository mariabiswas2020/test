import { SortOrder } from "../../util/SortOrder";

export type SmsLogOrderByInput = {
  createdAt?: SortOrder;
  errorMsg?: SortOrder;
  gatewayId?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  phone?: SortOrder;
  sentAt?: SortOrder;
  status?: SortOrder;
};

import { SortOrder } from "../../util/SortOrder";

export type SmsGatewayOrderByInput = {
  apiKey?: SortOrder;
  apiSecret?: SortOrder;
  apiUrl?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  isDefault?: SortOrder;
  name?: SortOrder;
  provider?: SortOrder;
  senderId?: SortOrder;
  updatedAt?: SortOrder;
};

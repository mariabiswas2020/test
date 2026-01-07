import { SortOrder } from "../../util/SortOrder";

export type CustomerSessionOrderByInput = {
  bytesIn?: SortOrder;
  bytesOut?: SortOrder;
  customerId?: SortOrder;
  endedAt?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  lastSeenAt?: SortOrder;
  macAddress?: SortOrder;
  sessionId?: SortOrder;
  startedAt?: SortOrder;
};

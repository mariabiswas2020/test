import { SortOrder } from "../../util/SortOrder";

export type NetworkStatusOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  latency?: SortOrder;
  region?: SortOrder;
  timestamp?: SortOrder;
  uptime?: SortOrder;
};

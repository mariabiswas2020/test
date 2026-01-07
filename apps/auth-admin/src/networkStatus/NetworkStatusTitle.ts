import { NetworkStatus as TNetworkStatus } from "../api/networkStatus/NetworkStatus";

export const NETWORKSTATUS_TITLE_FIELD = "region";

export const NetworkStatusTitle = (record: TNetworkStatus): string => {
  return record.region?.toString() || String(record.id);
};

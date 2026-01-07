import { MikroTikRouter as TMikroTikRouter } from "../api/mikroTikRouter/MikroTikRouter";

export const MIKROTIKROUTER_TITLE_FIELD = "name";

export const MikroTikRouterTitle = (record: TMikroTikRouter): string => {
  return record.name?.toString() || String(record.id);
};

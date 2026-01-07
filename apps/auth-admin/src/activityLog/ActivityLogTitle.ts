import { ActivityLog as TActivityLog } from "../api/activityLog/ActivityLog";

export const ACTIVITYLOG_TITLE_FIELD = "action";

export const ActivityLogTitle = (record: TActivityLog): string => {
  return record.action?.toString() || String(record.id);
};

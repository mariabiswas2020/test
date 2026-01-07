import { SmsLog as TSmsLog } from "../api/smsLog/SmsLog";

export const SMSLOG_TITLE_FIELD = "errorMsg";

export const SmsLogTitle = (record: TSmsLog): string => {
  return record.errorMsg?.toString() || String(record.id);
};

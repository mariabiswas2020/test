import { ResellerRechargeLog as TResellerRechargeLog } from "../api/resellerRechargeLog/ResellerRechargeLog";

export const RESELLERRECHARGELOG_TITLE_FIELD = "note";

export const ResellerRechargeLogTitle = (
  record: TResellerRechargeLog
): string => {
  return record.note?.toString() || String(record.id);
};

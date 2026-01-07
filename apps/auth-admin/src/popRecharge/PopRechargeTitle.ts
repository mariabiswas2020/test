import { PopRecharge as TPopRecharge } from "../api/popRecharge/PopRecharge";

export const POPRECHARGE_TITLE_FIELD = "performedBy";

export const PopRechargeTitle = (record: TPopRecharge): string => {
  return record.performedBy?.toString() || String(record.id);
};

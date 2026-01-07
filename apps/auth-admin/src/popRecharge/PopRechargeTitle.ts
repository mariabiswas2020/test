import { PopRecharge as TPopRecharge } from "../api/popRecharge/PopRecharge";

export const POPRECHARGE_TITLE_FIELD = "reference";

export const PopRechargeTitle = (record: TPopRecharge): string => {
  return record.reference?.toString() || String(record.id);
};

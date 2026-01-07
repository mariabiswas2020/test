import { Reseller as TReseller } from "../api/reseller/Reseller";

export const RESELLER_TITLE_FIELD = "businessName";

export const ResellerTitle = (record: TReseller): string => {
  return record.businessName?.toString() || String(record.id);
};

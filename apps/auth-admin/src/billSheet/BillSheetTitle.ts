import { BillSheet as TBillSheet } from "../api/billSheet/BillSheet";

export const BILLSHEET_TITLE_FIELD = "month";

export const BillSheetTitle = (record: TBillSheet): string => {
  return record.month?.toString() || String(record.id);
};

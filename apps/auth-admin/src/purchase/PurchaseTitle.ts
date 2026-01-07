import { Purchase as TPurchase } from "../api/purchase/Purchase";

export const PURCHASE_TITLE_FIELD = "invoiceNo";

export const PurchaseTitle = (record: TPurchase): string => {
  return record.invoiceNo?.toString() || String(record.id);
};

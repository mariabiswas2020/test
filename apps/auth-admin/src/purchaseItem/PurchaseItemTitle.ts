import { PurchaseItem as TPurchaseItem } from "../api/purchaseItem/PurchaseItem";

export const PURCHASEITEM_TITLE_FIELD = "id";

export const PurchaseItemTitle = (record: TPurchaseItem): string => {
  return record.id?.toString() || String(record.id);
};

import { ProductItem as TProductItem } from "../api/productItem/ProductItem";

export const PRODUCTITEM_TITLE_FIELD = "serialNumber";

export const ProductItemTitle = (record: TProductItem): string => {
  return record.serialNumber?.toString() || String(record.id);
};

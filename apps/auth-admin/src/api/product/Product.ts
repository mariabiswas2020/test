import { ProductItem } from "../productItem/ProductItem";
import { PurchaseItem } from "../purchaseItem/PurchaseItem";

export type Product = {
  brand: string | null;
  category: string | null;
  hasWarranty: boolean;
  id: string;
  items?: Array<ProductItem>;
  name: string;
  purchases?: Array<PurchaseItem>;
  unit: string | null;
  warrantyDays: number | null;
};

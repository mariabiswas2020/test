import { ProductItem } from "../productItem/ProductItem";
import { PurchaseItem } from "../purchaseItem/PurchaseItem";

export type Product = {
  brand: string | null;
  category: string | null;
  createdAt: Date;
  hasWarranty: boolean;
  id: string;
  items?: Array<ProductItem>;
  name: string;
  purchases?: Array<PurchaseItem>;
  unit: string | null;
  updatedAt: Date;
  warrantyDays: number | null;
};

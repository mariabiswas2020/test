import { PurchaseItem } from "../purchaseItem/PurchaseItem";
import { ProductItem } from "../productItem/ProductItem";
import { Supplier } from "../supplier/Supplier";
import { Decimal } from "decimal.js";

export type Purchase = {
  date: Date;
  id: string;
  invoiceNo: string | null;
  items?: Array<PurchaseItem>;
  stockItems?: Array<ProductItem>;
  supplier?: Supplier;
  totalAmount: Decimal;
};

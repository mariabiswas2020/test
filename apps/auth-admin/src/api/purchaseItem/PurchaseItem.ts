import { Product } from "../product/Product";
import { Purchase } from "../purchase/Purchase";
import { Decimal } from "decimal.js";

export type PurchaseItem = {
  id: string;
  product?: Product;
  purchase?: Purchase;
  quantity: number;
  unitPrice: Decimal;
};

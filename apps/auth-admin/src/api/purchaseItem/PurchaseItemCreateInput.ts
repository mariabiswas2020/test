import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PurchaseItemCreateInput = {
  product: ProductWhereUniqueInput;
  purchase: PurchaseWhereUniqueInput;
  quantity: number;
  unitPrice: Decimal;
};

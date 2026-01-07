import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PurchaseItemUpdateInput = {
  product?: ProductWhereUniqueInput;
  purchase?: PurchaseWhereUniqueInput;
  quantity?: number;
  unitPrice?: Decimal;
};

import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";

export type ProductItemCreateInput = {
  isUsedProduct: boolean;
  locationPop?: PopWhereUniqueInput | null;
  product: ProductWhereUniqueInput;
  purchase?: PurchaseWhereUniqueInput | null;
  serialNumber: string;
  status: "IN_STOCK" | "SOLD" | "DEPLOYED" | "RETURNED" | "DAMAGED";
};

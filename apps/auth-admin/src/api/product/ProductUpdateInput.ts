import { ProductItemUpdateManyWithoutProductsInput } from "./ProductItemUpdateManyWithoutProductsInput";
import { PurchaseItemUpdateManyWithoutProductsInput } from "./PurchaseItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  brand?: string | null;
  category?: string | null;
  hasWarranty?: boolean;
  items?: ProductItemUpdateManyWithoutProductsInput;
  name?: string;
  purchases?: PurchaseItemUpdateManyWithoutProductsInput;
  unit?: string | null;
  warrantyDays?: number | null;
};

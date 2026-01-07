import { ProductItemCreateNestedManyWithoutProductsInput } from "./ProductItemCreateNestedManyWithoutProductsInput";
import { PurchaseItemCreateNestedManyWithoutProductsInput } from "./PurchaseItemCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  brand?: string | null;
  category?: string | null;
  hasWarranty: boolean;
  items?: ProductItemCreateNestedManyWithoutProductsInput;
  name: string;
  purchases?: PurchaseItemCreateNestedManyWithoutProductsInput;
  unit?: string | null;
  warrantyDays?: number | null;
};

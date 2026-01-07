import { PurchaseCreateNestedManyWithoutSuppliersInput } from "./PurchaseCreateNestedManyWithoutSuppliersInput";

export type SupplierCreateInput = {
  company?: string | null;
  name: string;
  phone?: string | null;
  purchases?: PurchaseCreateNestedManyWithoutSuppliersInput;
};

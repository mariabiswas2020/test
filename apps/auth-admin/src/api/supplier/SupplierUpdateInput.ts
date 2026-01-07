import { PurchaseUpdateManyWithoutSuppliersInput } from "./PurchaseUpdateManyWithoutSuppliersInput";

export type SupplierUpdateInput = {
  company?: string | null;
  name?: string;
  phone?: string | null;
  purchases?: PurchaseUpdateManyWithoutSuppliersInput;
};

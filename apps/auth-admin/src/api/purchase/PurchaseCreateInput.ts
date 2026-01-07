import { PurchaseItemCreateNestedManyWithoutPurchasesInput } from "./PurchaseItemCreateNestedManyWithoutPurchasesInput";
import { ProductItemCreateNestedManyWithoutPurchasesInput } from "./ProductItemCreateNestedManyWithoutPurchasesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PurchaseCreateInput = {
  invoiceNo?: string | null;
  items?: PurchaseItemCreateNestedManyWithoutPurchasesInput;
  stockItems?: ProductItemCreateNestedManyWithoutPurchasesInput;
  supplier: SupplierWhereUniqueInput;
  totalAmount: Decimal;
};

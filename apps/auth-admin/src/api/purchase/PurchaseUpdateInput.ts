import { PurchaseItemUpdateManyWithoutPurchasesInput } from "./PurchaseItemUpdateManyWithoutPurchasesInput";
import { ProductItemUpdateManyWithoutPurchasesInput } from "./ProductItemUpdateManyWithoutPurchasesInput";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { Decimal } from "decimal.js";

export type PurchaseUpdateInput = {
  invoiceNo?: string | null;
  items?: PurchaseItemUpdateManyWithoutPurchasesInput;
  stockItems?: ProductItemUpdateManyWithoutPurchasesInput;
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: Decimal;
};

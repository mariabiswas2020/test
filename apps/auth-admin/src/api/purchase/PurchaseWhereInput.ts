import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PurchaseItemListRelationFilter } from "../purchaseItem/PurchaseItemListRelationFilter";
import { ProductItemListRelationFilter } from "../productItem/ProductItemListRelationFilter";
import { SupplierWhereUniqueInput } from "../supplier/SupplierWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";

export type PurchaseWhereInput = {
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  id?: StringFilter;
  invoiceNo?: StringNullableFilter;
  items?: PurchaseItemListRelationFilter;
  stockItems?: ProductItemListRelationFilter;
  supplier?: SupplierWhereUniqueInput;
  totalAmount?: DecimalFilter;
  updatedAt?: DateTimeFilter;
};

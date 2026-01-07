import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type SupplierWhereInput = {
  company?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  purchases?: PurchaseListRelationFilter;
};

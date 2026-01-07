import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PurchaseListRelationFilter } from "../purchase/PurchaseListRelationFilter";

export type SupplierWhereInput = {
  company?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  name?: StringFilter;
  phone?: StringNullableFilter;
  purchases?: PurchaseListRelationFilter;
  updatedAt?: DateTimeFilter;
};

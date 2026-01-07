import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProductItemListRelationFilter } from "../productItem/ProductItemListRelationFilter";
import { PurchaseItemListRelationFilter } from "../purchaseItem/PurchaseItemListRelationFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type ProductWhereInput = {
  brand?: StringNullableFilter;
  category?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  hasWarranty?: BooleanFilter;
  id?: StringFilter;
  items?: ProductItemListRelationFilter;
  name?: StringFilter;
  purchases?: PurchaseItemListRelationFilter;
  unit?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  warrantyDays?: IntNullableFilter;
};

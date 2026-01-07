import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopListRelationFilter } from "../pop/PopListRelationFilter";

export type AreaWhereInput = {
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  pops?: PopListRelationFilter;
};

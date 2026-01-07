import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopListRelationFilter } from "../pop/PopListRelationFilter";

export type AreaWhereInput = {
  createdAt?: DateTimeFilter;
  customers?: CustomerListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  pops?: PopListRelationFilter;
  updatedAt?: DateTimeFilter;
};

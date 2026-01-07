import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type PackageModelWhereInput = {
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  mikroTikProfile?: StringNullableFilter;
  name?: StringFilter;
  price?: DecimalFilter;
  speed?: StringNullableFilter;
  type?: "RETAIL" | "WHOLESALE";
};

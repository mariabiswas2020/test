import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { ResellerPackageListRelationFilter } from "../resellerPackage/ResellerPackageListRelationFilter";

export type PackageModelWhereInput = {
  createdAt?: DateTimeFilter;
  customers?: CustomerListRelationFilter;
  id?: StringFilter;
  mikroTikProfile?: StringNullableFilter;
  name?: StringFilter;
  price?: DecimalFilter;
  resellerPricing?: ResellerPackageListRelationFilter;
  speed?: StringNullableFilter;
  type?: "RETAIL" | "WHOLESALE";
  updatedAt?: DateTimeFilter;
};

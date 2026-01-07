import { ResellerPackageListRelationFilter } from "../resellerPackage/ResellerPackageListRelationFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopListRelationFilter } from "../pop/PopListRelationFilter";
import { ResellerRechargeLogListRelationFilter } from "../resellerRechargeLog/ResellerRechargeLogListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResellerWhereInput = {
  assignedPackages?: ResellerPackageListRelationFilter;
  balance?: DecimalFilter;
  businessName?: StringNullableFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  pops?: PopListRelationFilter;
  rechargeLogs?: ResellerRechargeLogListRelationFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

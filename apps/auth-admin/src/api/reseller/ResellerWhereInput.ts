import { DecimalFilter } from "../../util/DecimalFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopListRelationFilter } from "../pop/PopListRelationFilter";
import { ResellerRechargeLogListRelationFilter } from "../resellerRechargeLog/ResellerRechargeLogListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ResellerWhereInput = {
  balance?: DecimalFilter;
  businessName?: StringNullableFilter;
  id?: StringFilter;
  pops?: PopListRelationFilter;
  rechargeLogs?: ResellerRechargeLogListRelationFilter;
  user?: UserWhereUniqueInput;
};

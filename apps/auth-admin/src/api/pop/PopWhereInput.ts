import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { CustomerListRelationFilter } from "../customer/CustomerListRelationFilter";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { PopWhereUniqueInput } from "./PopWhereUniqueInput";
import { ProductItemListRelationFilter } from "../productItem/ProductItemListRelationFilter";
import { PopRechargeListRelationFilter } from "../popRecharge/PopRechargeListRelationFilter";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { PopListRelationFilter } from "./PopListRelationFilter";

export type PopWhereInput = {
  address?: StringNullableFilter;
  area?: AreaWhereUniqueInput;
  balance?: DecimalFilter;
  customers?: CustomerListRelationFilter;
  expenses?: ExpenseListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
  parentPop?: PopWhereUniqueInput;
  products?: ProductItemListRelationFilter;
  rechargeHistory?: PopRechargeListRelationFilter;
  reseller?: ResellerWhereUniqueInput;
  subPops?: PopListRelationFilter;
  type?: "MAIN" | "RESELLER" | "SUB_POP";
};

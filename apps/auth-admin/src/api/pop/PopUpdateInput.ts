import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { Decimal } from "decimal.js";
import { CustomerUpdateManyWithoutPopsInput } from "./CustomerUpdateManyWithoutPopsInput";
import { ExpenseUpdateManyWithoutPopsInput } from "./ExpenseUpdateManyWithoutPopsInput";
import { PopWhereUniqueInput } from "./PopWhereUniqueInput";
import { ProductItemUpdateManyWithoutPopsInput } from "./ProductItemUpdateManyWithoutPopsInput";
import { PopRechargeUpdateManyWithoutPopsInput } from "./PopRechargeUpdateManyWithoutPopsInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { PopUpdateManyWithoutPopsInput } from "./PopUpdateManyWithoutPopsInput";

export type PopUpdateInput = {
  address?: string | null;
  area?: AreaWhereUniqueInput | null;
  balance?: Decimal;
  customers?: CustomerUpdateManyWithoutPopsInput;
  expenses?: ExpenseUpdateManyWithoutPopsInput;
  name?: string;
  parentPop?: PopWhereUniqueInput | null;
  products?: ProductItemUpdateManyWithoutPopsInput;
  rechargeHistory?: PopRechargeUpdateManyWithoutPopsInput;
  reseller?: ResellerWhereUniqueInput | null;
  subPops?: PopUpdateManyWithoutPopsInput;
  type?: "MAIN" | "RESELLER" | "SUB_POP";
};

import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { Decimal } from "decimal.js";
import { CustomerCreateNestedManyWithoutPopsInput } from "./CustomerCreateNestedManyWithoutPopsInput";
import { ExpenseCreateNestedManyWithoutPopsInput } from "./ExpenseCreateNestedManyWithoutPopsInput";
import { PopWhereUniqueInput } from "./PopWhereUniqueInput";
import { ProductItemCreateNestedManyWithoutPopsInput } from "./ProductItemCreateNestedManyWithoutPopsInput";
import { PopRechargeCreateNestedManyWithoutPopsInput } from "./PopRechargeCreateNestedManyWithoutPopsInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { PopCreateNestedManyWithoutPopsInput } from "./PopCreateNestedManyWithoutPopsInput";

export type PopCreateInput = {
  address?: string | null;
  area?: AreaWhereUniqueInput | null;
  balance: Decimal;
  customers?: CustomerCreateNestedManyWithoutPopsInput;
  expenses?: ExpenseCreateNestedManyWithoutPopsInput;
  name: string;
  parentPop?: PopWhereUniqueInput | null;
  products?: ProductItemCreateNestedManyWithoutPopsInput;
  rechargeHistory?: PopRechargeCreateNestedManyWithoutPopsInput;
  reseller?: ResellerWhereUniqueInput | null;
  subPops?: PopCreateNestedManyWithoutPopsInput;
  type: "MAIN" | "RESELLER" | "SUB_POP";
};

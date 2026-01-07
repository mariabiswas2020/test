import { Area } from "../area/Area";
import { Decimal } from "decimal.js";
import { Customer } from "../customer/Customer";
import { Expense } from "../expense/Expense";
import { ProductItem } from "../productItem/ProductItem";
import { PopRecharge } from "../popRecharge/PopRecharge";
import { Reseller } from "../reseller/Reseller";

export type Pop = {
  address: string | null;
  area?: Area | null;
  balance: Decimal;
  customers?: Array<Customer>;
  expenses?: Array<Expense>;
  id: string;
  name: string;
  parentPop?: Pop | null;
  products?: Array<ProductItem>;
  rechargeHistory?: Array<PopRecharge>;
  reseller?: Reseller | null;
  subPops?: Array<Pop>;
  type?: "MAIN" | "RESELLER" | "SUB_POP";
};

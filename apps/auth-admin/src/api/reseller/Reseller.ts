import { Decimal } from "decimal.js";
import { Pop } from "../pop/Pop";
import { ResellerRechargeLog } from "../resellerRechargeLog/ResellerRechargeLog";
import { User } from "../user/User";

export type Reseller = {
  balance: Decimal;
  businessName: string | null;
  id: string;
  pops?: Array<Pop>;
  rechargeLogs?: Array<ResellerRechargeLog>;
  user?: User;
};

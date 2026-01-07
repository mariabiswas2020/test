import { ResellerPackage } from "../resellerPackage/ResellerPackage";
import { Decimal } from "decimal.js";
import { Pop } from "../pop/Pop";
import { ResellerRechargeLog } from "../resellerRechargeLog/ResellerRechargeLog";
import { User } from "../user/User";

export type Reseller = {
  assignedPackages?: Array<ResellerPackage>;
  balance: Decimal;
  businessName: string | null;
  createdAt: Date;
  id: string;
  pops?: Array<Pop>;
  rechargeLogs?: Array<ResellerRechargeLog>;
  updatedAt: Date;
  user?: User;
};

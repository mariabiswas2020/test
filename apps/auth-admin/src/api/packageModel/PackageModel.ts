import { Customer } from "../customer/Customer";
import { Decimal } from "decimal.js";
import { ResellerPackage } from "../resellerPackage/ResellerPackage";

export type PackageModel = {
  createdAt: Date;
  customers?: Array<Customer>;
  id: string;
  mikroTikProfile: string | null;
  name: string;
  price: Decimal;
  resellerPricing?: Array<ResellerPackage>;
  speed: string | null;
  type?: "RETAIL" | "WHOLESALE";
  updatedAt: Date;
};

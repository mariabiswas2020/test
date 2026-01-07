import { PackageModel } from "../packageModel/PackageModel";
import { Reseller } from "../reseller/Reseller";
import { Decimal } from "decimal.js";

export type ResellerPackage = {
  createdAt: Date;
  id: string;
  isActive: boolean;
  packageField?: PackageModel;
  reseller?: Reseller;
  updatedAt: Date;
  wholesalePrice: Decimal;
};

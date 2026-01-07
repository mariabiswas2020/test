import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ResellerPackageCreateInput = {
  isActive: boolean;
  packageField: PackageModelWhereUniqueInput;
  reseller: ResellerWhereUniqueInput;
  wholesalePrice: Decimal;
};

import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { Decimal } from "decimal.js";

export type ResellerPackageUpdateInput = {
  isActive?: boolean;
  packageField?: PackageModelWhereUniqueInput;
  reseller?: ResellerWhereUniqueInput;
  wholesalePrice?: Decimal;
};

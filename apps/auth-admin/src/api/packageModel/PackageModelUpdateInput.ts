import { CustomerUpdateManyWithoutPackageModelsInput } from "./CustomerUpdateManyWithoutPackageModelsInput";
import { Decimal } from "decimal.js";
import { ResellerPackageUpdateManyWithoutPackageModelsInput } from "./ResellerPackageUpdateManyWithoutPackageModelsInput";

export type PackageModelUpdateInput = {
  customers?: CustomerUpdateManyWithoutPackageModelsInput;
  mikroTikProfile?: string | null;
  name?: string;
  price?: Decimal;
  resellerPricing?: ResellerPackageUpdateManyWithoutPackageModelsInput;
  speed?: string | null;
  type?: "RETAIL" | "WHOLESALE";
};

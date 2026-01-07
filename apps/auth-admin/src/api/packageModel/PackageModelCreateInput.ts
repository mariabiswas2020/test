import { CustomerCreateNestedManyWithoutPackageModelsInput } from "./CustomerCreateNestedManyWithoutPackageModelsInput";
import { Decimal } from "decimal.js";
import { ResellerPackageCreateNestedManyWithoutPackageModelsInput } from "./ResellerPackageCreateNestedManyWithoutPackageModelsInput";

export type PackageModelCreateInput = {
  customers?: CustomerCreateNestedManyWithoutPackageModelsInput;
  mikroTikProfile?: string | null;
  name: string;
  price: Decimal;
  resellerPricing?: ResellerPackageCreateNestedManyWithoutPackageModelsInput;
  speed?: string | null;
  type: "RETAIL" | "WHOLESALE";
};

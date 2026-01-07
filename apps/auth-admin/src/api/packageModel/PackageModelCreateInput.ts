import { CustomerCreateNestedManyWithoutPackageModelsInput } from "./CustomerCreateNestedManyWithoutPackageModelsInput";
import { Decimal } from "decimal.js";

export type PackageModelCreateInput = {
  customers?: CustomerCreateNestedManyWithoutPackageModelsInput;
  mikroTikProfile?: string | null;
  name: string;
  price: Decimal;
  speed?: string | null;
  type: "RETAIL" | "WHOLESALE";
};

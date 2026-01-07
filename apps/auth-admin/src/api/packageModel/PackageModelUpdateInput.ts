import { CustomerUpdateManyWithoutPackageModelsInput } from "./CustomerUpdateManyWithoutPackageModelsInput";
import { Decimal } from "decimal.js";

export type PackageModelUpdateInput = {
  customers?: CustomerUpdateManyWithoutPackageModelsInput;
  mikroTikProfile?: string | null;
  name?: string;
  price?: Decimal;
  speed?: string | null;
  type?: "RETAIL" | "WHOLESALE";
};

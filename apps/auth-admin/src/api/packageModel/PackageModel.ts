import { Customer } from "../customer/Customer";
import { Decimal } from "decimal.js";

export type PackageModel = {
  customers?: Array<Customer>;
  id: string;
  mikroTikProfile: string | null;
  name: string;
  price: Decimal;
  speed: string | null;
  type?: "RETAIL" | "WHOLESALE";
};

import { Customer } from "../customer/Customer";
import { Decimal } from "decimal.js";

export type BillSheet = {
  customer?: Customer;
  generatedAt: Date;
  id: string;
  month: string;
  payable: Decimal;
  status?: "PAID" | "UNPAID" | "PARTIAL";
  updatedAt: Date;
  year: number;
};

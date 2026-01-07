import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { Decimal } from "decimal.js";

export type BillSheetCreateInput = {
  customer: CustomerWhereUniqueInput;
  month: string;
  payable: Decimal;
  status: "PAID" | "UNPAID" | "PARTIAL";
  year: number;
};

import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { IntFilter } from "../../util/IntFilter";

export type BillSheetWhereInput = {
  customer?: CustomerWhereUniqueInput;
  generatedAt?: DateTimeFilter;
  id?: StringFilter;
  month?: StringFilter;
  payable?: DecimalFilter;
  status?: "PAID" | "UNPAID" | "PARTIAL";
  year?: IntFilter;
};

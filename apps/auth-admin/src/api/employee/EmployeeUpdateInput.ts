import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeUpdateInput = {
  address?: string | null;
  designation?: string;
  nid?: string | null;
  salary?: Decimal | null;
  user?: UserWhereUniqueInput;
};

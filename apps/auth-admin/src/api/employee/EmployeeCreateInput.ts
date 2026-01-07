import { Decimal } from "decimal.js";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type EmployeeCreateInput = {
  address?: string | null;
  designation: string;
  nid?: string | null;
  salary?: Decimal | null;
  user: UserWhereUniqueInput;
};

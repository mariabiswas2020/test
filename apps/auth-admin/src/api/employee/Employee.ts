import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Employee = {
  address: string | null;
  designation: string;
  id: string;
  joinDate: Date;
  nid: string | null;
  salary: Decimal | null;
  user?: User;
};

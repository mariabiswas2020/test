import { Decimal } from "decimal.js";
import { User } from "../user/User";

export type Employee = {
  address: string | null;
  createdAt: Date;
  designation: string;
  id: string;
  joinDate: Date;
  nid: string | null;
  salary: Decimal | null;
  updatedAt: Date;
  user?: User;
};

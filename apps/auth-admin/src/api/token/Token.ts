import { User } from "../user/User";
import { TokenCategory } from "../tokenCategory/TokenCategory";
import { Customer } from "../customer/Customer";

export type Token = {
  assignee?: User | null;
  category?: TokenCategory;
  closedAt: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string | null;
  id: string;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  ticketNo: string;
};

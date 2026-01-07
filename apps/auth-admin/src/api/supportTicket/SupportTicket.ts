import { User } from "../user/User";
import { TicketCategory } from "../ticketCategory/TicketCategory";
import { Customer } from "../customer/Customer";

export type SupportTicket = {
  assignee?: User | null;
  category?: TicketCategory | null;
  closedAt: Date | null;
  createdAt: Date;
  customer?: Customer | null;
  description: string;
  id: string;
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  resolvedAt: Date | null;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  subject: string | null;
  ticketNo: string | null;
  updatedAt: Date;
  user?: User | null;
};

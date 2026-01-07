import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TicketCategoryWhereUniqueInput } from "../ticketCategory/TicketCategoryWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type SupportTicketUpdateInput = {
  assignee?: UserWhereUniqueInput | null;
  category?: TicketCategoryWhereUniqueInput | null;
  closedAt?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string;
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  resolvedAt?: Date | null;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  subject?: string | null;
  ticketNo?: string | null;
  user?: UserWhereUniqueInput | null;
};

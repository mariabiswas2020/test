import { SortOrder } from "../../util/SortOrder";

export type SupportTicketOrderByInput = {
  assignedTo?: SortOrder;
  categoryId?: SortOrder;
  closedAt?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  priority?: SortOrder;
  resolvedAt?: SortOrder;
  status?: SortOrder;
  subject?: SortOrder;
  ticketNo?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

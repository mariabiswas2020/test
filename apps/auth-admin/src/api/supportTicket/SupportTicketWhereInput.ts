import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TicketCategoryWhereUniqueInput } from "../ticketCategory/TicketCategoryWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SupportTicketWhereInput = {
  assignee?: UserWhereUniqueInput;
  category?: TicketCategoryWhereUniqueInput;
  closedAt?: DateTimeNullableFilter;
  createdAt?: DateTimeFilter;
  customer?: CustomerWhereUniqueInput;
  description?: StringFilter;
  id?: StringFilter;
  priority?: "LOW" | "MEDIUM" | "HIGH" | "URGENT";
  resolvedAt?: DateTimeNullableFilter;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  subject?: StringNullableFilter;
  ticketNo?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

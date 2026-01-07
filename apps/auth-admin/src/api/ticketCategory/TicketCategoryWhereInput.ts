import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";

export type TicketCategoryWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  price?: DecimalFilter;
  tickets?: SupportTicketListRelationFilter;
  title?: StringFilter;
  updatedAt?: DateTimeFilter;
};

import { Decimal } from "decimal.js";
import { SupportTicket } from "../supportTicket/SupportTicket";

export type TicketCategory = {
  createdAt: Date;
  id: string;
  price: Decimal;
  tickets?: Array<SupportTicket>;
  title: string;
  updatedAt: Date;
};

import { SupportTicket as TSupportTicket } from "../api/supportTicket/SupportTicket";

export const SUPPORTTICKET_TITLE_FIELD = "description";

export const SupportTicketTitle = (record: TSupportTicket): string => {
  return record.description?.toString() || String(record.id);
};

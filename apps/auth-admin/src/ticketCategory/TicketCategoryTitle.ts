import { TicketCategory as TTicketCategory } from "../api/ticketCategory/TicketCategory";

export const TICKETCATEGORY_TITLE_FIELD = "title";

export const TicketCategoryTitle = (record: TTicketCategory): string => {
  return record.title?.toString() || String(record.id);
};

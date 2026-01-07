import { Decimal } from "decimal.js";
import { SupportTicketUpdateManyWithoutTicketCategoriesInput } from "./SupportTicketUpdateManyWithoutTicketCategoriesInput";

export type TicketCategoryUpdateInput = {
  price?: Decimal;
  tickets?: SupportTicketUpdateManyWithoutTicketCategoriesInput;
  title?: string;
};

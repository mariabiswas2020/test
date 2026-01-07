import { Decimal } from "decimal.js";
import { SupportTicketCreateNestedManyWithoutTicketCategoriesInput } from "./SupportTicketCreateNestedManyWithoutTicketCategoriesInput";

export type TicketCategoryCreateInput = {
  price: Decimal;
  tickets?: SupportTicketCreateNestedManyWithoutTicketCategoriesInput;
  title: string;
};

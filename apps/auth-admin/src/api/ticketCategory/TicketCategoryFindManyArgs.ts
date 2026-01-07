import { TicketCategoryWhereInput } from "./TicketCategoryWhereInput";
import { TicketCategoryOrderByInput } from "./TicketCategoryOrderByInput";

export type TicketCategoryFindManyArgs = {
  where?: TicketCategoryWhereInput;
  orderBy?: Array<TicketCategoryOrderByInput>;
  skip?: number;
  take?: number;
};

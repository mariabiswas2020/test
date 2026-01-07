import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TokenCategoryWhereUniqueInput } from "../tokenCategory/TokenCategoryWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type TokenUpdateInput = {
  assignee?: UserWhereUniqueInput | null;
  category?: TokenCategoryWhereUniqueInput;
  closedAt?: Date | null;
  customer?: CustomerWhereUniqueInput | null;
  description?: string | null;
  status?: "OPEN" | "IN_PROGRESS" | "RESOLVED" | "CLOSED";
  ticketNo?: string;
};

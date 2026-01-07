import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityLogUpdateInput = {
  action?: string;
  details?: InputJsonValue;
  ipAddress?: string | null;
  user?: UserWhereUniqueInput;
};

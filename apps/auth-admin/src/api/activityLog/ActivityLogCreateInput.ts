import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ActivityLogCreateInput = {
  action: string;
  details?: InputJsonValue;
  ipAddress?: string | null;
  user: UserWhereUniqueInput;
};

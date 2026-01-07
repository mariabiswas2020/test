import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsageUpdateInput = {
  download?: number;
  total?: number;
  upload?: number;
  user?: UserWhereUniqueInput;
};

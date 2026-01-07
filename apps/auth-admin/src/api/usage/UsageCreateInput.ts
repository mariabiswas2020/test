import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsageCreateInput = {
  download: number;
  total: number;
  upload: number;
  user: UserWhereUniqueInput;
};

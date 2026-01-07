import { DateTimeFilter } from "../../util/DateTimeFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type UsageWhereInput = {
  createdAt?: DateTimeFilter;
  date?: DateTimeFilter;
  download?: FloatFilter;
  id?: StringFilter;
  total?: FloatFilter;
  upload?: FloatFilter;
  user?: UserWhereUniqueInput;
};

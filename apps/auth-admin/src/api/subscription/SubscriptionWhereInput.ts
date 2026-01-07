import { DateTimeFilter } from "../../util/DateTimeFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionWhereInput = {
  createdAt?: DateTimeFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  plan?: PlanWhereUniqueInput;
  startDate?: DateTimeFilter;
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED" | "SUSPENDED";
  updatedAt?: DateTimeFilter;
  user?: UserWhereUniqueInput;
};

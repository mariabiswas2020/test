import { PlanWhereUniqueInput } from "../plan/PlanWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type SubscriptionCreateInput = {
  endDate?: Date | null;
  plan: PlanWhereUniqueInput;
  status: "ACTIVE" | "CANCELLED" | "EXPIRED" | "SUSPENDED";
  user: UserWhereUniqueInput;
};

import { SubscriptionUpdateManyWithoutPlansInput } from "./SubscriptionUpdateManyWithoutPlansInput";

export type PlanUpdateInput = {
  description?: string;
  features?: string;
  isActive?: boolean;
  name?: string;
  price?: number;
  speed?: "MBPS_100" | "MBPS_500" | "GBPS_1";
  speedDisplay?: string;
  subscriptions?: SubscriptionUpdateManyWithoutPlansInput;
};

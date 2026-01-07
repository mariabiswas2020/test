import { SubscriptionCreateNestedManyWithoutPlansInput } from "./SubscriptionCreateNestedManyWithoutPlansInput";

export type PlanCreateInput = {
  description: string;
  features: string;
  isActive: boolean;
  name: string;
  price: number;
  speed: "MBPS_100" | "MBPS_500" | "GBPS_1";
  speedDisplay: string;
  subscriptions?: SubscriptionCreateNestedManyWithoutPlansInput;
};

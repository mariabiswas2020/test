import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { FloatFilter } from "../../util/FloatFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";

export type PlanWhereInput = {
  createdAt?: DateTimeFilter;
  description?: StringFilter;
  features?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  price?: FloatFilter;
  speed?: "MBPS_100" | "MBPS_500" | "GBPS_1";
  speedDisplay?: StringFilter;
  subscriptions?: SubscriptionListRelationFilter;
  updatedAt?: DateTimeFilter;
};

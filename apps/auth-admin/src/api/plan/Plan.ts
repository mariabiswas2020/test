import { Subscription } from "../subscription/Subscription";

export type Plan = {
  createdAt: Date;
  description: string;
  features: string;
  id: string;
  isActive: boolean;
  name: string;
  price: number;
  speed?: "MBPS_100" | "MBPS_500" | "GBPS_1";
  speedDisplay: string;
  subscriptions?: Array<Subscription>;
  updatedAt: Date;
};

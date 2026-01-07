import { Plan } from "../plan/Plan";
import { User } from "../user/User";

export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  plan?: Plan;
  startDate: Date;
  status?: "ACTIVE" | "CANCELLED" | "EXPIRED" | "SUSPENDED";
  updatedAt: Date;
  user?: User;
};

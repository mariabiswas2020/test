import { User } from "../user/User";

export type Invoice = {
  amount: number;
  createdAt: Date;
  description: string | null;
  dueDate: Date;
  id: string;
  paidDate: Date | null;
  status?: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
  updatedAt: Date;
  user?: User;
};

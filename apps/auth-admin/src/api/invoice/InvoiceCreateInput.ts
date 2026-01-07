import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type InvoiceCreateInput = {
  amount: number;
  description?: string | null;
  dueDate: Date;
  paidDate?: Date | null;
  status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
  user: UserWhereUniqueInput;
};

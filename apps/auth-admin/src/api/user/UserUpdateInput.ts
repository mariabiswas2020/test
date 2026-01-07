import { AccountUpdateManyWithoutUsersInput } from "./AccountUpdateManyWithoutUsersInput";
import { ActivityLogUpdateManyWithoutUsersInput } from "./ActivityLogUpdateManyWithoutUsersInput";
import { SupportTicketUpdateManyWithoutUsersInput } from "./SupportTicketUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ExpenseUpdateManyWithoutUsersInput } from "./ExpenseUpdateManyWithoutUsersInput";
import { InvoiceUpdateManyWithoutUsersInput } from "./InvoiceUpdateManyWithoutUsersInput";
import { MarketingLeadUpdateManyWithoutUsersInput } from "./MarketingLeadUpdateManyWithoutUsersInput";
import { UserPermissionUpdateManyWithoutUsersInput } from "./UserPermissionUpdateManyWithoutUsersInput";
import { PopRechargeUpdateManyWithoutUsersInput } from "./PopRechargeUpdateManyWithoutUsersInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { SessionUpdateManyWithoutUsersInput } from "./SessionUpdateManyWithoutUsersInput";
import { SubscriptionUpdateManyWithoutUsersInput } from "./SubscriptionUpdateManyWithoutUsersInput";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";
import { UsageUpdateManyWithoutUsersInput } from "./UsageUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  accounts?: AccountUpdateManyWithoutUsersInput;
  activityLogs?: ActivityLogUpdateManyWithoutUsersInput;
  assignedTickets?: SupportTicketUpdateManyWithoutUsersInput;
  collectedBills?: TransactionUpdateManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  employeeProfile?: EmployeeWhereUniqueInput | null;
  expenses?: ExpenseUpdateManyWithoutUsersInput;
  firstName?: string | null;
  image?: string | null;
  invoices?: InvoiceUpdateManyWithoutUsersInput;
  isActive?: boolean;
  lastName?: string | null;
  marketingLeads?: MarketingLeadUpdateManyWithoutUsersInput;
  name?: string | null;
  password?: string | null;
  permissions?: UserPermissionUpdateManyWithoutUsersInput;
  phone?: string | null;
  popRecharges?: PopRechargeUpdateManyWithoutUsersInput;
  resellerProfile?: ResellerWhereUniqueInput | null;
  roles?:
    | "USER"
    | "ADMIN"
    | "SUPER_ADMIN"
    | "MANAGER"
    | "ACCOUNTANT"
    | "SUPPORT"
    | "CABLE_TEAM"
    | "BILL_MAN"
    | "MARKETING_AGENT"
    | "RESELLER"
    | "SUB_RESELLER";
  sessions?: SessionUpdateManyWithoutUsersInput;
  subscriptions?: SubscriptionUpdateManyWithoutUsersInput;
  supportTickets?: TokenUpdateManyWithoutUsersInput;
  tickets?: SupportTicketUpdateManyWithoutUsersInput;
  usages?: UsageUpdateManyWithoutUsersInput;
  username?: string | null;
};

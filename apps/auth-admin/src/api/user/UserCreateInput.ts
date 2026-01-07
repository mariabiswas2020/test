import { AccountCreateNestedManyWithoutUsersInput } from "./AccountCreateNestedManyWithoutUsersInput";
import { ActivityLogCreateNestedManyWithoutUsersInput } from "./ActivityLogCreateNestedManyWithoutUsersInput";
import { SupportTicketCreateNestedManyWithoutUsersInput } from "./SupportTicketCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ExpenseCreateNestedManyWithoutUsersInput } from "./ExpenseCreateNestedManyWithoutUsersInput";
import { InvoiceCreateNestedManyWithoutUsersInput } from "./InvoiceCreateNestedManyWithoutUsersInput";
import { MarketingLeadCreateNestedManyWithoutUsersInput } from "./MarketingLeadCreateNestedManyWithoutUsersInput";
import { UserPermissionCreateNestedManyWithoutUsersInput } from "./UserPermissionCreateNestedManyWithoutUsersInput";
import { PopRechargeCreateNestedManyWithoutUsersInput } from "./PopRechargeCreateNestedManyWithoutUsersInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { SessionCreateNestedManyWithoutUsersInput } from "./SessionCreateNestedManyWithoutUsersInput";
import { SubscriptionCreateNestedManyWithoutUsersInput } from "./SubscriptionCreateNestedManyWithoutUsersInput";
import { TokenCreateNestedManyWithoutUsersInput } from "./TokenCreateNestedManyWithoutUsersInput";
import { UsageCreateNestedManyWithoutUsersInput } from "./UsageCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  accounts?: AccountCreateNestedManyWithoutUsersInput;
  activityLogs?: ActivityLogCreateNestedManyWithoutUsersInput;
  assignedTickets?: SupportTicketCreateNestedManyWithoutUsersInput;
  collectedBills?: TransactionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  emailVerified?: Date | null;
  employeeProfile?: EmployeeWhereUniqueInput | null;
  expenses?: ExpenseCreateNestedManyWithoutUsersInput;
  firstName?: string | null;
  image?: string | null;
  invoices?: InvoiceCreateNestedManyWithoutUsersInput;
  isActive: boolean;
  lastName?: string | null;
  marketingLeads?: MarketingLeadCreateNestedManyWithoutUsersInput;
  name?: string | null;
  password?: string | null;
  permissions?: UserPermissionCreateNestedManyWithoutUsersInput;
  phone?: string | null;
  popRecharges?: PopRechargeCreateNestedManyWithoutUsersInput;
  resellerProfile?: ResellerWhereUniqueInput | null;
  roles:
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
  sessions?: SessionCreateNestedManyWithoutUsersInput;
  subscriptions?: SubscriptionCreateNestedManyWithoutUsersInput;
  supportTickets?: TokenCreateNestedManyWithoutUsersInput;
  tickets?: SupportTicketCreateNestedManyWithoutUsersInput;
  usages?: UsageCreateNestedManyWithoutUsersInput;
  username?: string | null;
};

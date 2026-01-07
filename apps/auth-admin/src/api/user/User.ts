import { Account } from "../account/Account";
import { ActivityLog } from "../activityLog/ActivityLog";
import { SupportTicket } from "../supportTicket/SupportTicket";
import { Transaction } from "../transaction/Transaction";
import { Employee } from "../employee/Employee";
import { Expense } from "../expense/Expense";
import { Invoice } from "../invoice/Invoice";
import { MarketingLead } from "../marketingLead/MarketingLead";
import { UserPermission } from "../userPermission/UserPermission";
import { PopRecharge } from "../popRecharge/PopRecharge";
import { Reseller } from "../reseller/Reseller";
import { Session } from "../session/Session";
import { Subscription } from "../subscription/Subscription";
import { Token } from "../token/Token";
import { Usage } from "../usage/Usage";

export type User = {
  accounts?: Array<Account>;
  activityLogs?: Array<ActivityLog>;
  assignedTickets?: Array<SupportTicket>;
  collectedBills?: Array<Transaction>;
  createdAt: Date;
  email: string | null;
  emailVerified: Date | null;
  employeeProfile?: Employee | null;
  expenses?: Array<Expense>;
  firstName: string | null;
  id: string;
  image: string | null;
  invoices?: Array<Invoice>;
  isActive: boolean;
  lastName: string | null;
  marketingLeads?: Array<MarketingLead>;
  name: string | null;
  password: string | null;
  permissions?: Array<UserPermission>;
  phone: string | null;
  popRecharges?: Array<PopRecharge>;
  resellerProfile?: Reseller | null;
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
  sessions?: Array<Session>;
  subscriptions?: Array<Subscription>;
  supportTickets?: Array<Token>;
  tickets?: Array<SupportTicket>;
  updatedAt: Date;
  usages?: Array<Usage>;
  username: string | null;
};

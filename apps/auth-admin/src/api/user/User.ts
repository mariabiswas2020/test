import { ActivityLog } from "../activityLog/ActivityLog";
import { Transaction } from "../transaction/Transaction";
import { Employee } from "../employee/Employee";
import { MarketingLead } from "../marketingLead/MarketingLead";
import { JsonValue } from "type-fest";
import { Reseller } from "../reseller/Reseller";
import { Token } from "../token/Token";

export type User = {
  activityLogs?: Array<ActivityLog>;
  collectedBills?: Array<Transaction>;
  createdAt: Date;
  email: string | null;
  employeeProfile?: Employee | null;
  firstName: string | null;
  id: string;
  isActive: boolean;
  lastName: string | null;
  marketingLeads?: Array<MarketingLead>;
  permissionRoutes: JsonValue;
  phone: string | null;
  resellerProfile?: Reseller | null;
  roles?:
    | "SUPER_ADMIN"
    | "MANAGER"
    | "ACCOUNTANT"
    | "SUPPORT"
    | "CABLE_TEAM"
    | "BILL_MAN"
    | "MARKETING_AGENT"
    | "RESELLER"
    | "SUB_RESELLER";
  supportTickets?: Array<Token>;
  updatedAt: Date;
  username: string;
};

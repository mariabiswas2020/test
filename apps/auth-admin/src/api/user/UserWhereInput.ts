import { AccountListRelationFilter } from "../account/AccountListRelationFilter";
import { ActivityLogListRelationFilter } from "../activityLog/ActivityLogListRelationFilter";
import { SupportTicketListRelationFilter } from "../supportTicket/SupportTicketListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { ExpenseListRelationFilter } from "../expense/ExpenseListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { InvoiceListRelationFilter } from "../invoice/InvoiceListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MarketingLeadListRelationFilter } from "../marketingLead/MarketingLeadListRelationFilter";
import { UserPermissionListRelationFilter } from "../userPermission/UserPermissionListRelationFilter";
import { PopRechargeListRelationFilter } from "../popRecharge/PopRechargeListRelationFilter";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";
import { SubscriptionListRelationFilter } from "../subscription/SubscriptionListRelationFilter";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";
import { UsageListRelationFilter } from "../usage/UsageListRelationFilter";

export type UserWhereInput = {
  accounts?: AccountListRelationFilter;
  activityLogs?: ActivityLogListRelationFilter;
  assignedTickets?: SupportTicketListRelationFilter;
  collectedBills?: TransactionListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  emailVerified?: DateTimeNullableFilter;
  employeeProfile?: EmployeeWhereUniqueInput;
  expenses?: ExpenseListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  image?: StringNullableFilter;
  invoices?: InvoiceListRelationFilter;
  isActive?: BooleanFilter;
  lastName?: StringNullableFilter;
  marketingLeads?: MarketingLeadListRelationFilter;
  name?: StringNullableFilter;
  password?: StringNullableFilter;
  permissions?: UserPermissionListRelationFilter;
  phone?: StringNullableFilter;
  popRecharges?: PopRechargeListRelationFilter;
  resellerProfile?: ResellerWhereUniqueInput;
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
  sessions?: SessionListRelationFilter;
  subscriptions?: SubscriptionListRelationFilter;
  supportTickets?: TokenListRelationFilter;
  tickets?: SupportTicketListRelationFilter;
  updatedAt?: DateTimeFilter;
  usages?: UsageListRelationFilter;
  username?: StringNullableFilter;
};

import { ActivityLogListRelationFilter } from "../activityLog/ActivityLogListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { MarketingLeadListRelationFilter } from "../marketingLead/MarketingLeadListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";

export type UserWhereInput = {
  activityLogs?: ActivityLogListRelationFilter;
  collectedBills?: TransactionListRelationFilter;
  createdAt?: DateTimeFilter;
  email?: StringNullableFilter;
  employeeProfile?: EmployeeWhereUniqueInput;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  lastName?: StringNullableFilter;
  marketingLeads?: MarketingLeadListRelationFilter;
  password?: StringFilter;
  permissionRoutes?: JsonFilter;
  phone?: StringNullableFilter;
  resellerProfile?: ResellerWhereUniqueInput;
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
  supportTickets?: TokenListRelationFilter;
  updatedAt?: DateTimeFilter;
  username?: StringFilter;
};

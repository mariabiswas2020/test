import { ActivityLogUpdateManyWithoutUsersInput } from "./ActivityLogUpdateManyWithoutUsersInput";
import { TransactionUpdateManyWithoutUsersInput } from "./TransactionUpdateManyWithoutUsersInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MarketingLeadUpdateManyWithoutUsersInput } from "./MarketingLeadUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { TokenUpdateManyWithoutUsersInput } from "./TokenUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  activityLogs?: ActivityLogUpdateManyWithoutUsersInput;
  collectedBills?: TransactionUpdateManyWithoutUsersInput;
  email?: string | null;
  employeeProfile?: EmployeeWhereUniqueInput | null;
  firstName?: string | null;
  isActive?: boolean;
  lastName?: string | null;
  marketingLeads?: MarketingLeadUpdateManyWithoutUsersInput;
  password?: string;
  permissionRoutes?: InputJsonValue;
  phone?: string | null;
  resellerProfile?: ResellerWhereUniqueInput | null;
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
  supportTickets?: TokenUpdateManyWithoutUsersInput;
  username?: string;
};

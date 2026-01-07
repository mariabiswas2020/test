import { ActivityLogCreateNestedManyWithoutUsersInput } from "./ActivityLogCreateNestedManyWithoutUsersInput";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";
import { EmployeeWhereUniqueInput } from "../employee/EmployeeWhereUniqueInput";
import { MarketingLeadCreateNestedManyWithoutUsersInput } from "./MarketingLeadCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { TokenCreateNestedManyWithoutUsersInput } from "./TokenCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  activityLogs?: ActivityLogCreateNestedManyWithoutUsersInput;
  collectedBills?: TransactionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  employeeProfile?: EmployeeWhereUniqueInput | null;
  firstName?: string | null;
  isActive: boolean;
  lastName?: string | null;
  marketingLeads?: MarketingLeadCreateNestedManyWithoutUsersInput;
  password: string;
  permissionRoutes?: InputJsonValue;
  phone?: string | null;
  resellerProfile?: ResellerWhereUniqueInput | null;
  role:
    | "SUPER_ADMIN"
    | "MANAGER"
    | "ACCOUNTANT"
    | "SUPPORT"
    | "CABLE_TEAM"
    | "BILL_MAN"
    | "MARKETING_AGENT"
    | "RESELLER"
    | "SUB_RESELLER";
  supportTickets?: TokenCreateNestedManyWithoutUsersInput;
  username: string;
};

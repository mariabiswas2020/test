import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { Decimal } from "decimal.js";
import { BillSheetCreateNestedManyWithoutCustomersInput } from "./BillSheetCreateNestedManyWithoutCustomersInput";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { CustomerSessionCreateNestedManyWithoutCustomersInput } from "./CustomerSessionCreateNestedManyWithoutCustomersInput";
import { SupportTicketCreateNestedManyWithoutCustomersInput } from "./SupportTicketCreateNestedManyWithoutCustomersInput";
import { TokenCreateNestedManyWithoutCustomersInput } from "./TokenCreateNestedManyWithoutCustomersInput";
import { TransactionCreateNestedManyWithoutCustomersInput } from "./TransactionCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  address?: string | null;
  area?: AreaWhereUniqueInput | null;
  balance: Decimal;
  billSheets?: BillSheetCreateNestedManyWithoutCustomersInput;
  billingCycle: number;
  customerId: string;
  deletedAt?: Date | null;
  dueAmount: Decimal;
  email?: string | null;
  ipAddress?: string | null;
  macAddress?: string | null;
  monthlyBill: Decimal;
  name: string;
  nid?: string | null;
  onuMac?: string | null;
  packageField: PackageModelWhereUniqueInput;
  phone: string;
  pop: PopWhereUniqueInput;
  pppoePassword?: string | null;
  pppoeUsername?: string | null;
  sessions?: CustomerSessionCreateNestedManyWithoutCustomersInput;
  status:
    | "ACTIVE"
    | "INACTIVE"
    | "EXPIRED"
    | "PENDING"
    | "DELETED"
    | "DISCONNECTED";
  tempExtensionActive: boolean;
  tempExtensionExpiresAt?: Date | null;
  tickets?: SupportTicketCreateNestedManyWithoutCustomersInput;
  tokens?: TokenCreateNestedManyWithoutCustomersInput;
  transactions?: TransactionCreateNestedManyWithoutCustomersInput;
};

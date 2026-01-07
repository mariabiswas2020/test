import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { Decimal } from "decimal.js";
import { BillSheetUpdateManyWithoutCustomersInput } from "./BillSheetUpdateManyWithoutCustomersInput";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { CustomerSessionUpdateManyWithoutCustomersInput } from "./CustomerSessionUpdateManyWithoutCustomersInput";
import { SupportTicketUpdateManyWithoutCustomersInput } from "./SupportTicketUpdateManyWithoutCustomersInput";
import { TokenUpdateManyWithoutCustomersInput } from "./TokenUpdateManyWithoutCustomersInput";
import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  area?: AreaWhereUniqueInput | null;
  balance?: Decimal;
  billSheets?: BillSheetUpdateManyWithoutCustomersInput;
  billingCycle?: number;
  customerId?: string;
  deletedAt?: Date | null;
  dueAmount?: Decimal;
  email?: string | null;
  ipAddress?: string | null;
  macAddress?: string | null;
  monthlyBill?: Decimal;
  name?: string;
  nid?: string | null;
  onuMac?: string | null;
  packageField?: PackageModelWhereUniqueInput;
  phone?: string;
  pop?: PopWhereUniqueInput;
  pppoePassword?: string | null;
  pppoeUsername?: string | null;
  sessions?: CustomerSessionUpdateManyWithoutCustomersInput;
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "EXPIRED"
    | "PENDING"
    | "DELETED"
    | "DISCONNECTED";
  tempExtensionActive?: boolean;
  tempExtensionExpiresAt?: Date | null;
  tickets?: SupportTicketUpdateManyWithoutCustomersInput;
  tokens?: TokenUpdateManyWithoutCustomersInput;
  transactions?: TransactionUpdateManyWithoutCustomersInput;
};

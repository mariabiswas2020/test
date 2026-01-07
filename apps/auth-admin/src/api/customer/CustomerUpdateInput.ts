import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { Decimal } from "decimal.js";
import { BillSheetUpdateManyWithoutCustomersInput } from "./BillSheetUpdateManyWithoutCustomersInput";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { TokenUpdateManyWithoutCustomersInput } from "./TokenUpdateManyWithoutCustomersInput";
import { TransactionUpdateManyWithoutCustomersInput } from "./TransactionUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  area?: AreaWhereUniqueInput | null;
  balance?: Decimal;
  billSheets?: BillSheetUpdateManyWithoutCustomersInput;
  billingCycle?: number;
  customerId?: string;
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
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "EXPIRED"
    | "PENDING"
    | "DELETED"
    | "DISCONNECTED";
  tempExtensionActive?: boolean;
  tempExtensionExpiresAt?: Date | null;
  tokens?: TokenUpdateManyWithoutCustomersInput;
  transactions?: TransactionUpdateManyWithoutCustomersInput;
};

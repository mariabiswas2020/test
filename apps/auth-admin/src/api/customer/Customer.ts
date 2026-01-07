import { Area } from "../area/Area";
import { Decimal } from "decimal.js";
import { BillSheet } from "../billSheet/BillSheet";
import { PackageModel } from "../packageModel/PackageModel";
import { Pop } from "../pop/Pop";
import { Token } from "../token/Token";
import { Transaction } from "../transaction/Transaction";

export type Customer = {
  address: string | null;
  area?: Area | null;
  balance: Decimal;
  billSheets?: Array<BillSheet>;
  billingCycle: number;
  connectionDate: Date;
  createdAt: Date;
  customerId: string;
  dueAmount: Decimal;
  email: string | null;
  id: string;
  ipAddress: string | null;
  macAddress: string | null;
  monthlyBill: Decimal;
  name: string;
  nid: string | null;
  onuMac: string | null;
  packageField?: PackageModel;
  phone: string;
  pop?: Pop;
  pppoePassword: string | null;
  pppoeUsername: string | null;
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "EXPIRED"
    | "PENDING"
    | "DELETED"
    | "DISCONNECTED";
  tempExtensionActive: boolean;
  tempExtensionExpiresAt: Date | null;
  tokens?: Array<Token>;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};

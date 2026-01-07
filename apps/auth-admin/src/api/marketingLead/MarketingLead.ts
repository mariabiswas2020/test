import { User } from "../user/User";
import { Decimal } from "decimal.js";

export type MarketingLead = {
  address: string | null;
  agent?: User;
  createdAt: Date;
  id: string;
  mapLocation: string | null;
  name: string;
  phone: string;
  priceQuote: Decimal | null;
  proposedPackage: string | null;
  remarks: string | null;
  status?: "NEW" | "CONTACTED" | "SUCCESS" | "REJECTED";
};

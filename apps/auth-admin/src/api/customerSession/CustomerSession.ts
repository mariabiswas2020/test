import { Customer } from "../customer/Customer";

export type CustomerSession = {
  bytesIn: bigint;
  bytesOut: bigint;
  customer?: Customer;
  endedAt: Date | null;
  id: string;
  ipAddress: string | null;
  lastSeenAt: Date;
  macAddress: string | null;
  sessionId: string | null;
  startedAt: Date;
};

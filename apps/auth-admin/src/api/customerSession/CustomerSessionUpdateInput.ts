import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type CustomerSessionUpdateInput = {
  bytesIn?: bigint;
  bytesOut?: bigint;
  customer?: CustomerWhereUniqueInput;
  endedAt?: Date | null;
  ipAddress?: string | null;
  macAddress?: string | null;
  sessionId?: string | null;
};

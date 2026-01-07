import { SmsGatewayWhereUniqueInput } from "../smsGateway/SmsGatewayWhereUniqueInput";

export type SmsLogCreateInput = {
  errorMsg?: string | null;
  gateway?: SmsGatewayWhereUniqueInput | null;
  message: string;
  phone: string;
  sentAt?: Date | null;
  status: "PENDING" | "SENT" | "DELIVERED" | "FAILED";
};

import { SmsGateway } from "../smsGateway/SmsGateway";

export type SmsLog = {
  createdAt: Date;
  errorMsg: string | null;
  gateway?: SmsGateway | null;
  id: string;
  message: string;
  phone: string;
  sentAt: Date | null;
  status?: "PENDING" | "SENT" | "DELIVERED" | "FAILED";
};

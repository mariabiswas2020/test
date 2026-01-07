import { SmsLog } from "../smsLog/SmsLog";

export type SmsGateway = {
  apiKey: string | null;
  apiSecret: string | null;
  apiUrl: string;
  createdAt: Date;
  id: string;
  isActive: boolean;
  isDefault: boolean;
  logs?: Array<SmsLog>;
  name: string;
  provider: string;
  senderId: string | null;
  updatedAt: Date;
};

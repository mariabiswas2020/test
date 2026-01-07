import { SmsLogUpdateManyWithoutSmsGatewaysInput } from "./SmsLogUpdateManyWithoutSmsGatewaysInput";

export type SmsGatewayUpdateInput = {
  apiKey?: string | null;
  apiSecret?: string | null;
  apiUrl?: string;
  isActive?: boolean;
  isDefault?: boolean;
  logs?: SmsLogUpdateManyWithoutSmsGatewaysInput;
  name?: string;
  provider?: string;
  senderId?: string | null;
};

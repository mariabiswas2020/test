import { SmsLogCreateNestedManyWithoutSmsGatewaysInput } from "./SmsLogCreateNestedManyWithoutSmsGatewaysInput";

export type SmsGatewayCreateInput = {
  apiKey?: string | null;
  apiSecret?: string | null;
  apiUrl: string;
  isActive: boolean;
  isDefault: boolean;
  logs?: SmsLogCreateNestedManyWithoutSmsGatewaysInput;
  name: string;
  provider: string;
  senderId?: string | null;
};

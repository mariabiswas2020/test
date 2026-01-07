import { SmsGatewayWhereInput } from "./SmsGatewayWhereInput";
import { SmsGatewayOrderByInput } from "./SmsGatewayOrderByInput";

export type SmsGatewayFindManyArgs = {
  where?: SmsGatewayWhereInput;
  orderBy?: Array<SmsGatewayOrderByInput>;
  skip?: number;
  take?: number;
};

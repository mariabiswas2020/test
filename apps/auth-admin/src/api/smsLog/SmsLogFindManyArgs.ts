import { SmsLogWhereInput } from "./SmsLogWhereInput";
import { SmsLogOrderByInput } from "./SmsLogOrderByInput";

export type SmsLogFindManyArgs = {
  where?: SmsLogWhereInput;
  orderBy?: Array<SmsLogOrderByInput>;
  skip?: number;
  take?: number;
};

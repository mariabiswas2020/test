import { SmsTemplateWhereInput } from "./SmsTemplateWhereInput";
import { SmsTemplateOrderByInput } from "./SmsTemplateOrderByInput";

export type SmsTemplateFindManyArgs = {
  where?: SmsTemplateWhereInput;
  orderBy?: Array<SmsTemplateOrderByInput>;
  skip?: number;
  take?: number;
};

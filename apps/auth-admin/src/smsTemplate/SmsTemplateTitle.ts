import { SmsTemplate as TSmsTemplate } from "../api/smsTemplate/SmsTemplate";

export const SMSTEMPLATE_TITLE_FIELD = "name";

export const SmsTemplateTitle = (record: TSmsTemplate): string => {
  return record.name?.toString() || String(record.id);
};

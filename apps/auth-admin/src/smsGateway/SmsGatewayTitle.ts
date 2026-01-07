import { SmsGateway as TSmsGateway } from "../api/smsGateway/SmsGateway";

export const SMSGATEWAY_TITLE_FIELD = "name";

export const SmsGatewayTitle = (record: TSmsGateway): string => {
  return record.name?.toString() || String(record.id);
};

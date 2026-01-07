export type SmsTemplateUpdateInput = {
  content?: string;
  isActive?: boolean;
  name?: string;
  type?:
    | "BILLING_REMINDER"
    | "PAYMENT_CONFIRMATION"
    | "CONNECTION_NOTICE"
    | "EXPIRY_WARNING"
    | "CUSTOM";
};

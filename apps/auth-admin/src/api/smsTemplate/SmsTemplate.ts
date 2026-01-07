export type SmsTemplate = {
  content: string;
  createdAt: Date;
  id: string;
  isActive: boolean;
  name: string;
  type?:
    | "BILLING_REMINDER"
    | "PAYMENT_CONFIRMATION"
    | "CONNECTION_NOTICE"
    | "EXPIRY_WARNING"
    | "CUSTOM";
  updatedAt: Date;
};

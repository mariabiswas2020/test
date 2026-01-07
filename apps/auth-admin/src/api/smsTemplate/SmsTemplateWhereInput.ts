import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type SmsTemplateWhereInput = {
  content?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  type?:
    | "BILLING_REMINDER"
    | "PAYMENT_CONFIRMATION"
    | "CONNECTION_NOTICE"
    | "EXPIRY_WARNING"
    | "CUSTOM";
  updatedAt?: DateTimeFilter;
};

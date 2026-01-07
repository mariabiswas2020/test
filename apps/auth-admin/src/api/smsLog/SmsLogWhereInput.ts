import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { SmsGatewayWhereUniqueInput } from "../smsGateway/SmsGatewayWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type SmsLogWhereInput = {
  createdAt?: DateTimeFilter;
  errorMsg?: StringNullableFilter;
  gateway?: SmsGatewayWhereUniqueInput;
  id?: StringFilter;
  message?: StringFilter;
  phone?: StringFilter;
  sentAt?: DateTimeNullableFilter;
  status?: "PENDING" | "SENT" | "DELIVERED" | "FAILED";
};

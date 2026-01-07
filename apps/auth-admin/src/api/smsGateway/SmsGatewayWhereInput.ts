import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { SmsLogListRelationFilter } from "../smsLog/SmsLogListRelationFilter";

export type SmsGatewayWhereInput = {
  apiKey?: StringNullableFilter;
  apiSecret?: StringNullableFilter;
  apiUrl?: StringFilter;
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  isDefault?: BooleanFilter;
  logs?: SmsLogListRelationFilter;
  name?: StringFilter;
  provider?: StringFilter;
  senderId?: StringNullableFilter;
  updatedAt?: DateTimeFilter;
};

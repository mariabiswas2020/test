import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type NetworkStatusWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  latency?: FloatFilter;
  region?: StringFilter;
  timestamp?: DateTimeFilter;
  uptime?: FloatFilter;
};

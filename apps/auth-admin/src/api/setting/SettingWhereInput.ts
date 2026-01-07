import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  key?: StringFilter;
  updatedAt?: DateTimeFilter;
  value?: StringFilter;
};

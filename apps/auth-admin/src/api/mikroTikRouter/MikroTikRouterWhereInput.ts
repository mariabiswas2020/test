import { StringFilter } from "../../util/StringFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type MikroTikRouterWhereInput = {
  apiPassword?: StringFilter;
  apiPort?: IntFilter;
  apiUser?: StringFilter;
  createdAt?: DateTimeFilter;
  host?: StringFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  name?: StringFilter;
  pop?: PopWhereUniqueInput;
  updatedAt?: DateTimeFilter;
};

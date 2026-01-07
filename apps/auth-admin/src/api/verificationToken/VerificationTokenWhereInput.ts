import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type VerificationTokenWhereInput = {
  expires?: DateTimeFilter;
  id?: StringFilter;
  identifier?: StringFilter;
};

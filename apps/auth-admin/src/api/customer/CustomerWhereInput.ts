import { StringNullableFilter } from "../../util/StringNullableFilter";
import { AreaWhereUniqueInput } from "../area/AreaWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";
import { BillSheetListRelationFilter } from "../billSheet/BillSheetListRelationFilter";
import { IntFilter } from "../../util/IntFilter";
import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { BooleanFilter } from "../../util/BooleanFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type CustomerWhereInput = {
  address?: StringNullableFilter;
  area?: AreaWhereUniqueInput;
  balance?: DecimalFilter;
  billSheets?: BillSheetListRelationFilter;
  billingCycle?: IntFilter;
  connectionDate?: DateTimeFilter;
  createdAt?: DateTimeFilter;
  customerId?: StringFilter;
  dueAmount?: DecimalFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  ipAddress?: StringNullableFilter;
  macAddress?: StringNullableFilter;
  monthlyBill?: DecimalFilter;
  name?: StringFilter;
  nid?: StringNullableFilter;
  onuMac?: StringNullableFilter;
  packageField?: PackageModelWhereUniqueInput;
  phone?: StringFilter;
  pop?: PopWhereUniqueInput;
  pppoePassword?: StringNullableFilter;
  pppoeUsername?: StringNullableFilter;
  status?:
    | "ACTIVE"
    | "INACTIVE"
    | "EXPIRED"
    | "PENDING"
    | "DELETED"
    | "DISCONNECTED";
  tempExtensionActive?: BooleanFilter;
  tempExtensionExpiresAt?: DateTimeNullableFilter;
  tokens?: TokenListRelationFilter;
  transactions?: TransactionListRelationFilter;
  updatedAt?: DateTimeFilter;
};

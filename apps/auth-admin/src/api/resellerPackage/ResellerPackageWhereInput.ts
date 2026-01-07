import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PackageModelWhereUniqueInput } from "../packageModel/PackageModelWhereUniqueInput";
import { ResellerWhereUniqueInput } from "../reseller/ResellerWhereUniqueInput";
import { DecimalFilter } from "../../util/DecimalFilter";

export type ResellerPackageWhereInput = {
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  isActive?: BooleanFilter;
  packageField?: PackageModelWhereUniqueInput;
  reseller?: ResellerWhereUniqueInput;
  updatedAt?: DateTimeFilter;
  wholesalePrice?: DecimalFilter;
};

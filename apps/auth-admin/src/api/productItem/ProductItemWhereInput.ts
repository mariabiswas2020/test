import { StringFilter } from "../../util/StringFilter";
import { BooleanFilter } from "../../util/BooleanFilter";
import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";

export type ProductItemWhereInput = {
  id?: StringFilter;
  isUsedProduct?: BooleanFilter;
  locationPop?: PopWhereUniqueInput;
  product?: ProductWhereUniqueInput;
  purchase?: PurchaseWhereUniqueInput;
  serialNumber?: StringFilter;
  status?: "IN_STOCK" | "SOLD" | "DEPLOYED" | "RETURNED" | "DAMAGED";
};

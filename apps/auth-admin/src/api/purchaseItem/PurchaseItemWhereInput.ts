import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { PurchaseWhereUniqueInput } from "../purchase/PurchaseWhereUniqueInput";
import { IntFilter } from "../../util/IntFilter";
import { DecimalFilter } from "../../util/DecimalFilter";

export type PurchaseItemWhereInput = {
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  purchase?: PurchaseWhereUniqueInput;
  quantity?: IntFilter;
  unitPrice?: DecimalFilter;
};

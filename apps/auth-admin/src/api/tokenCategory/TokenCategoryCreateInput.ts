import { Decimal } from "decimal.js";
import { TokenCreateNestedManyWithoutTokenCategoriesInput } from "./TokenCreateNestedManyWithoutTokenCategoriesInput";

export type TokenCategoryCreateInput = {
  price: Decimal;
  title: string;
  tokens?: TokenCreateNestedManyWithoutTokenCategoriesInput;
};

import { Decimal } from "decimal.js";
import { TokenUpdateManyWithoutTokenCategoriesInput } from "./TokenUpdateManyWithoutTokenCategoriesInput";

export type TokenCategoryUpdateInput = {
  price?: Decimal;
  title?: string;
  tokens?: TokenUpdateManyWithoutTokenCategoriesInput;
};

import { StringFilter } from "../../util/StringFilter";
import { DecimalFilter } from "../../util/DecimalFilter";
import { TokenListRelationFilter } from "../token/TokenListRelationFilter";

export type TokenCategoryWhereInput = {
  id?: StringFilter;
  price?: DecimalFilter;
  title?: StringFilter;
  tokens?: TokenListRelationFilter;
};

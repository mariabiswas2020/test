import { Decimal } from "decimal.js";
import { Token } from "../token/Token";

export type TokenCategory = {
  id: string;
  price: Decimal;
  title: string;
  tokens?: Array<Token>;
};

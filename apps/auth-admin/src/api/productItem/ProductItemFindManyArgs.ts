import { ProductItemWhereInput } from "./ProductItemWhereInput";
import { ProductItemOrderByInput } from "./ProductItemOrderByInput";

export type ProductItemFindManyArgs = {
  where?: ProductItemWhereInput;
  orderBy?: Array<ProductItemOrderByInput>;
  skip?: number;
  take?: number;
};

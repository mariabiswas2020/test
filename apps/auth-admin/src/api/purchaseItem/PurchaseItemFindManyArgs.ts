import { PurchaseItemWhereInput } from "./PurchaseItemWhereInput";
import { PurchaseItemOrderByInput } from "./PurchaseItemOrderByInput";

export type PurchaseItemFindManyArgs = {
  where?: PurchaseItemWhereInput;
  orderBy?: Array<PurchaseItemOrderByInput>;
  skip?: number;
  take?: number;
};

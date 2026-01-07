import { ResellerWhereInput } from "./ResellerWhereInput";
import { ResellerOrderByInput } from "./ResellerOrderByInput";

export type ResellerFindManyArgs = {
  where?: ResellerWhereInput;
  orderBy?: Array<ResellerOrderByInput>;
  skip?: number;
  take?: number;
};

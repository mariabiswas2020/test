import { NetworkStatusWhereInput } from "./NetworkStatusWhereInput";
import { NetworkStatusOrderByInput } from "./NetworkStatusOrderByInput";

export type NetworkStatusFindManyArgs = {
  where?: NetworkStatusWhereInput;
  orderBy?: Array<NetworkStatusOrderByInput>;
  skip?: number;
  take?: number;
};

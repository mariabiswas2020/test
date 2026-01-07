import { ResellerPackageWhereInput } from "./ResellerPackageWhereInput";
import { ResellerPackageOrderByInput } from "./ResellerPackageOrderByInput";

export type ResellerPackageFindManyArgs = {
  where?: ResellerPackageWhereInput;
  orderBy?: Array<ResellerPackageOrderByInput>;
  skip?: number;
  take?: number;
};

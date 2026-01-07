import { MarketingLeadWhereInput } from "./MarketingLeadWhereInput";
import { MarketingLeadOrderByInput } from "./MarketingLeadOrderByInput";

export type MarketingLeadFindManyArgs = {
  where?: MarketingLeadWhereInput;
  orderBy?: Array<MarketingLeadOrderByInput>;
  skip?: number;
  take?: number;
};

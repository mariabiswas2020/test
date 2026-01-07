import { MarketingLead as TMarketingLead } from "../api/marketingLead/MarketingLead";

export const MARKETINGLEAD_TITLE_FIELD = "name";

export const MarketingLeadTitle = (record: TMarketingLead): string => {
  return record.name?.toString() || String(record.id);
};

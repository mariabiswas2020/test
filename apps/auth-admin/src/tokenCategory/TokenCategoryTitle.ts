import { TokenCategory as TTokenCategory } from "../api/tokenCategory/TokenCategory";

export const TOKENCATEGORY_TITLE_FIELD = "title";

export const TokenCategoryTitle = (record: TTokenCategory): string => {
  return record.title?.toString() || String(record.id);
};

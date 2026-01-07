import { Token as TToken } from "../api/token/Token";

export const TOKEN_TITLE_FIELD = "description";

export const TokenTitle = (record: TToken): string => {
  return record.description?.toString() || String(record.id);
};

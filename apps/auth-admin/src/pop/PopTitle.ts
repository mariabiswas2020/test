import { Pop as TPop } from "../api/pop/Pop";

export const POP_TITLE_FIELD = "name";

export const PopTitle = (record: TPop): string => {
  return record.name?.toString() || String(record.id);
};

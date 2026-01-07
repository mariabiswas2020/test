import { Transaction as TTransaction } from "../api/transaction/Transaction";

export const TRANSACTION_TITLE_FIELD = "note";

export const TransactionTitle = (record: TTransaction): string => {
  return record.note?.toString() || String(record.id);
};

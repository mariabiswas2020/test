import { Expense as TExpense } from "../api/expense/Expense";

export const EXPENSE_TITLE_FIELD = "title";

export const ExpenseTitle = (record: TExpense): string => {
  return record.title?.toString() || String(record.id);
};

import { Invoice as TInvoice } from "../api/invoice/Invoice";

export const INVOICE_TITLE_FIELD = "description";

export const InvoiceTitle = (record: TInvoice): string => {
  return record.description?.toString() || String(record.id);
};

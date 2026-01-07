import { CustomerSession as TCustomerSession } from "../api/customerSession/CustomerSession";

export const CUSTOMERSESSION_TITLE_FIELD = "ipAddress";

export const CustomerSessionTitle = (record: TCustomerSession): string => {
  return record.ipAddress?.toString() || String(record.id);
};

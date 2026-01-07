import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  address?: SortOrder;
  areaId?: SortOrder;
  balance?: SortOrder;
  billingCycle?: SortOrder;
  connectionDate?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  dueAmount?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  ipAddress?: SortOrder;
  macAddress?: SortOrder;
  monthlyBill?: SortOrder;
  name?: SortOrder;
  nid?: SortOrder;
  onuMac?: SortOrder;
  packageId?: SortOrder;
  phone?: SortOrder;
  popId?: SortOrder;
  pppoePassword?: SortOrder;
  pppoeUsername?: SortOrder;
  status?: SortOrder;
  tempExtensionActive?: SortOrder;
  tempExtensionExpiresAt?: SortOrder;
  updatedAt?: SortOrder;
};

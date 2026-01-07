import { Purchase } from "../purchase/Purchase";

export type Supplier = {
  company: string | null;
  createdAt: Date;
  id: string;
  name: string;
  phone: string | null;
  purchases?: Array<Purchase>;
  updatedAt: Date;
};

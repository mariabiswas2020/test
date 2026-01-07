import { Customer } from "../customer/Customer";
import { Pop } from "../pop/Pop";

export type Area = {
  customers?: Array<Customer>;
  description: string | null;
  id: string;
  name: string;
  pops?: Array<Pop>;
};

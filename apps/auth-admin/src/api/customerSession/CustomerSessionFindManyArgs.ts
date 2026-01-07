import { CustomerSessionWhereInput } from "./CustomerSessionWhereInput";
import { CustomerSessionOrderByInput } from "./CustomerSessionOrderByInput";

export type CustomerSessionFindManyArgs = {
  where?: CustomerSessionWhereInput;
  orderBy?: Array<CustomerSessionOrderByInput>;
  skip?: number;
  take?: number;
};

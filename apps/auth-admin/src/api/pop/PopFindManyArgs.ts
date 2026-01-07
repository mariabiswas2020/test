import { PopWhereInput } from "./PopWhereInput";
import { PopOrderByInput } from "./PopOrderByInput";

export type PopFindManyArgs = {
  where?: PopWhereInput;
  orderBy?: Array<PopOrderByInput>;
  skip?: number;
  take?: number;
};

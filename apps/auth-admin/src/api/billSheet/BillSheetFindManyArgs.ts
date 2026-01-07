import { BillSheetWhereInput } from "./BillSheetWhereInput";
import { BillSheetOrderByInput } from "./BillSheetOrderByInput";

export type BillSheetFindManyArgs = {
  where?: BillSheetWhereInput;
  orderBy?: Array<BillSheetOrderByInput>;
  skip?: number;
  take?: number;
};

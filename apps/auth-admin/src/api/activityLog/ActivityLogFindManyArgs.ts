import { ActivityLogWhereInput } from "./ActivityLogWhereInput";
import { ActivityLogOrderByInput } from "./ActivityLogOrderByInput";

export type ActivityLogFindManyArgs = {
  where?: ActivityLogWhereInput;
  orderBy?: Array<ActivityLogOrderByInput>;
  skip?: number;
  take?: number;
};

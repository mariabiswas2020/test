import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type ActivityLog = {
  action: string;
  createdAt: Date;
  details: JsonValue;
  id: string;
  ipAddress: string | null;
  user?: User;
};

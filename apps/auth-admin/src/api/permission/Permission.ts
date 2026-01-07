import { UserPermission } from "../userPermission/UserPermission";

export type Permission = {
  createdAt: Date;
  description: string | null;
  id: string;
  route: string;
  updatedAt: Date;
  users?: Array<UserPermission>;
};

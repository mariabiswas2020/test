import { UserPermissionUpdateManyWithoutPermissionsInput } from "./UserPermissionUpdateManyWithoutPermissionsInput";

export type PermissionUpdateInput = {
  description?: string | null;
  route?: string;
  users?: UserPermissionUpdateManyWithoutPermissionsInput;
};

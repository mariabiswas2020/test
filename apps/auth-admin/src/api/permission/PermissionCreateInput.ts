import { UserPermissionCreateNestedManyWithoutPermissionsInput } from "./UserPermissionCreateNestedManyWithoutPermissionsInput";

export type PermissionCreateInput = {
  description?: string | null;
  route: string;
  users?: UserPermissionCreateNestedManyWithoutPermissionsInput;
};

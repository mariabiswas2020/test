import { UserPermission as TUserPermission } from "../api/userPermission/UserPermission";

export const USERPERMISSION_TITLE_FIELD = "grantedBy";

export const UserPermissionTitle = (record: TUserPermission): string => {
  return record.grantedBy?.toString() || String(record.id);
};

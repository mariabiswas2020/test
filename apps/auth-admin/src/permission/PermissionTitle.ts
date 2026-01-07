import { Permission as TPermission } from "../api/permission/Permission";

export const PERMISSION_TITLE_FIELD = "description";

export const PermissionTitle = (record: TPermission): string => {
  return record.description?.toString() || String(record.id);
};

import { ResellerPackage as TResellerPackage } from "../api/resellerPackage/ResellerPackage";

export const RESELLERPACKAGE_TITLE_FIELD = "id";

export const ResellerPackageTitle = (record: TResellerPackage): string => {
  return record.id?.toString() || String(record.id);
};

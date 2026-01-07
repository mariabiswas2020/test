import { PackageModel as TPackageModel } from "../api/packageModel/PackageModel";

export const PACKAGEMODEL_TITLE_FIELD = "name";

export const PackageModelTitle = (record: TPackageModel): string => {
  return record.name?.toString() || String(record.id);
};

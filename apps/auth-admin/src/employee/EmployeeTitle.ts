import { Employee as TEmployee } from "../api/employee/Employee";

export const EMPLOYEE_TITLE_FIELD = "address";

export const EmployeeTitle = (record: TEmployee): string => {
  return record.address?.toString() || String(record.id);
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const BillSheetList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"BillSheets"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="generatedAt" label="Generated At" />
        <TextField label="ID" source="id" />
        <TextField label="Month" source="month" />
        <TextField label="Payable" source="payable" />
        <TextField label="Status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Year" source="year" />{" "}
      </Datagrid>
    </List>
  );
};

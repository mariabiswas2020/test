import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
} from "react-admin";
import Pagination from "../Components/Pagination";

export const ProductList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Products"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Brand" source="brand" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <BooleanField label="Has Warranty" source="hasWarranty" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Unit" source="unit" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Warranty Days" source="warrantyDays" />{" "}
      </Datagrid>
    </List>
  );
};

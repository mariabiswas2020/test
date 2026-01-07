import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
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
        <BooleanField label="Has Warranty" source="hasWarranty" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Unit" source="unit" />
        <TextField label="Warranty Days" source="warrantyDays" />{" "}
      </Datagrid>
    </List>
  );
};

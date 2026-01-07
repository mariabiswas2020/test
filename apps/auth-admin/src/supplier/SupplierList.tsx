import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SupplierList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Suppliers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Company" source="company" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const PackageModelList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PackageModels"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Mikro Tik Profile" source="mikroTikProfile" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Speed" source="speed" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

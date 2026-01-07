import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
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
        <TextField label="ID" source="id" />
        <TextField label="Mikro Tik Profile" source="mikroTikProfile" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Speed" source="speed" />
        <TextField label="Type" source="type" />{" "}
      </Datagrid>
    </List>
  );
};

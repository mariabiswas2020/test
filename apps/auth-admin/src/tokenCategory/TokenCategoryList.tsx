import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TokenCategoryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"TokenCategories"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />{" "}
      </Datagrid>
    </List>
  );
};

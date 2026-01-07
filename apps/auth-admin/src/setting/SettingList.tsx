import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const SettingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Settings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
        <TextField label="Key" source="key" />
        <TextField label="Value" source="value" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const VerificationTokenList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"VerificationTokens"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Expires" source="expires" />
        <TextField label="ID" source="id" />
        <TextField label="Identifier" source="identifier" />{" "}
      </Datagrid>
    </List>
  );
};

import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const NetworkStatusList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"NetworkStatuses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Latency" source="latency" />
        <TextField label="Region" source="region" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Uptime" source="uptime" />{" "}
      </Datagrid>
    </List>
  );
};

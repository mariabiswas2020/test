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

export const SmsGatewayList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SmsGateways"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Api Key" source="apiKey" />
        <TextField label="Api Secret" source="apiSecret" />
        <TextField label="Api Url" source="apiUrl" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <BooleanField label="Is Default" source="isDefault" />
        <TextField label="Name" source="name" />
        <TextField label="Provider" source="provider" />
        <TextField label="Sender Id" source="senderId" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

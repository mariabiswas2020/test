import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { SMSGATEWAY_TITLE_FIELD } from "../smsGateway/SmsGatewayTitle";

export const SmsLogList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"SmsLogs"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Error Msg" source="errorMsg" />
        <ReferenceField
          label="Gateway"
          source="smsgateway.id"
          reference="SmsGateway"
        >
          <TextField source={SMSGATEWAY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="Message" source="message" />
        <TextField label="Phone" source="phone" />
        <TextField label="Sent At" source="sentAt" />
        <TextField label="Status" source="status" />{" "}
      </Datagrid>
    </List>
  );
};

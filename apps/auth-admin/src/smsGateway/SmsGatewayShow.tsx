import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { SMSGATEWAY_TITLE_FIELD } from "./SmsGatewayTitle";

export const SmsGatewayShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SmsLog"
          target="gatewayId"
          label="SmsLogs"
        >
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
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

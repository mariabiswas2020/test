import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { SMSGATEWAY_TITLE_FIELD } from "../smsGateway/SmsGatewayTitle";

export const SmsLogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

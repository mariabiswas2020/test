import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const CustomerSessionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Bytes In" source="bytesIn" />
        <TextField label="Bytes Out" source="bytesOut" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Ended At" source="endedAt" />
        <TextField label="ID" source="id" />
        <TextField label="Ip Address" source="ipAddress" />
        <DateField source="lastSeenAt" label="Last Seen At" />
        <TextField label="Mac Address" source="macAddress" />
        <TextField label="Session Id" source="sessionId" />
        <DateField source="startedAt" label="Started At" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { SmsGatewayTitle } from "../smsGateway/SmsGatewayTitle";

export const SmsLogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Error Msg" source="errorMsg" />
        <ReferenceInput
          source="gateway.id"
          reference="SmsGateway"
          label="Gateway"
        >
          <SelectInput optionText={SmsGatewayTitle} />
        </ReferenceInput>
        <TextInput label="Message" source="message" />
        <TextInput label="Phone" source="phone" />
        <DateTimeInput label="Sent At" source="sentAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PENDING", value: "PENDING" },
            { label: "SENT", value: "SENT" },
            { label: "DELIVERED", value: "DELIVERED" },
            { label: "FAILED", value: "FAILED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

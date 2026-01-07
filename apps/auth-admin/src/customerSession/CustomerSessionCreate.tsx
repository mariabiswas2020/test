import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const CustomerSessionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="Bytes In" source="bytesIn" />
        <NumberInput step={1} label="Bytes Out" source="bytesOut" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Ended At" source="endedAt" />
        <TextInput label="Ip Address" source="ipAddress" />
        <TextInput label="Mac Address" source="macAddress" />
        <TextInput label="Session Id" source="sessionId" />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const NetworkStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Latency" source="latency" />
        <TextInput label="Region" source="region" />
        <NumberInput label="Uptime" source="uptime" />
      </SimpleForm>
    </Create>
  );
};

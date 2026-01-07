import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
} from "react-admin";

export const NetworkStatusEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Latency" source="latency" />
        <TextInput label="Region" source="region" />
        <NumberInput label="Uptime" source="uptime" />
      </SimpleForm>
    </Edit>
  );
};

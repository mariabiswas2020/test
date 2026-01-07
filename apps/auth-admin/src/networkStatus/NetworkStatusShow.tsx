import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
} from "react-admin";

export const NetworkStatusShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Latency" source="latency" />
        <TextField label="Region" source="region" />
        <DateField source="timestamp" label="Timestamp" />
        <TextField label="Uptime" source="uptime" />
      </SimpleShowLayout>
    </Show>
  );
};

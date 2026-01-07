import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { POP_TITLE_FIELD } from "../pop/PopTitle";

export const PopRechargeShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <TextField label="Performed By" source="performedBy" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Reference" source="reference" />
      </SimpleShowLayout>
    </Show>
  );
};

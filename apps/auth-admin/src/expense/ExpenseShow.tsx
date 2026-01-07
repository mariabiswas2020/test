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

export const ExpenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Added By" source="addedBy" />
        <TextField label="Amount" source="amount" />
        <TextField label="Category" source="category" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";

export const ExpenseShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField label="Added By User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Amount" source="amount" />
        <TextField label="Category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};

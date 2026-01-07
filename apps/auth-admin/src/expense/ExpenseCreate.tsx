import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";

export const ExpenseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Added By" source="addedBy" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Category" source="category" />
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};

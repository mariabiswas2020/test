import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Added By" source="addedBy" />
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Category" source="category" />
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Edit>
  );
};

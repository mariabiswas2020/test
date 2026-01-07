import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PopTitle } from "../pop/PopTitle";

export const ExpenseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="addedByUser.id"
          reference="User"
          label="Added By User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
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

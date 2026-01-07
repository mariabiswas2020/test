import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";

export const MikroTikRouterEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Api Password" source="apiPassword" />
        <NumberInput step={1} label="Api Port" source="apiPort" />
        <TextInput label="Api User" source="apiUser" />
        <TextInput label="Host" source="host" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

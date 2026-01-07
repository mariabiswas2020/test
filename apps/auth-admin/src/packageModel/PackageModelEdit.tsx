import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const PackageModelEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="customers" reference="Customer">
          <SelectArrayInput
            optionText={CustomerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Mikro Tik Profile" source="mikroTikProfile" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Speed" source="speed" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "RETAIL", value: "RETAIL" },
            { label: "WHOLESALE", value: "WHOLESALE" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

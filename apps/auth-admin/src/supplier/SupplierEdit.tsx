import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const SupplierEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Company" source="company" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput source="purchases" reference="Purchase">
          <SelectArrayInput
            optionText={PurchaseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

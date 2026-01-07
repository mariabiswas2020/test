import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { ResellerPackageTitle } from "../resellerPackage/ResellerPackageTitle";

export const PackageModelCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <ReferenceArrayInput
          source="resellerPricing"
          reference="ResellerPackage"
        >
          <SelectArrayInput
            optionText={ResellerPackageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
    </Create>
  );
};

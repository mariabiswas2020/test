import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
  NumberInput,
} from "react-admin";

import { ProductItemTitle } from "../productItem/ProductItemTitle";
import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Brand" source="brand" />
        <TextInput label="Category" source="category" />
        <BooleanInput label="Has Warranty" source="hasWarranty" />
        <ReferenceArrayInput source="items" reference="ProductItem">
          <SelectArrayInput
            optionText={ProductItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceArrayInput source="purchases" reference="PurchaseItem">
          <SelectArrayInput
            optionText={PurchaseItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Unit" source="unit" />
        <NumberInput step={1} label="Warranty Days" source="warrantyDays" />
      </SimpleForm>
    </Create>
  );
};

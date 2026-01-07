import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const ProductItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Used Product" source="isUsedProduct" />
        <ReferenceInput
          source="locationPop.id"
          reference="Pop"
          label="Location Pop"
        >
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="purchase.id"
          reference="Purchase"
          label="Purchase"
        >
          <SelectInput optionText={PurchaseTitle} />
        </ReferenceInput>
        <TextInput label="Serial Number" source="serialNumber" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "IN_STOCK", value: "IN_STOCK" },
            { label: "SOLD", value: "SOLD" },
            { label: "DEPLOYED", value: "DEPLOYED" },
            { label: "RETURNED", value: "RETURNED" },
            { label: "DAMAGED", value: "DAMAGED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";
import { PurchaseTitle } from "../purchase/PurchaseTitle";

export const PurchaseItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
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
        <NumberInput step={1} label="Quantity" source="quantity" />
        <NumberInput label="Unit Price" source="unitPrice" />
      </SimpleForm>
    </Edit>
  );
};

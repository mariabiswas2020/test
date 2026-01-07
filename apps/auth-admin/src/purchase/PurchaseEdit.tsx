import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PurchaseItemTitle } from "../purchaseItem/PurchaseItemTitle";
import { ProductItemTitle } from "../productItem/ProductItemTitle";
import { SupplierTitle } from "../supplier/SupplierTitle";

export const PurchaseEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Invoice No" source="invoiceNo" />
        <ReferenceArrayInput source="items" reference="PurchaseItem">
          <SelectArrayInput
            optionText={PurchaseItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="stockItems" reference="ProductItem">
          <SelectArrayInput
            optionText={ProductItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="supplier.id"
          reference="Supplier"
          label="Supplier"
        >
          <SelectInput optionText={SupplierTitle} />
        </ReferenceInput>
        <NumberInput label="Total Amount" source="totalAmount" />
      </SimpleForm>
    </Edit>
  );
};

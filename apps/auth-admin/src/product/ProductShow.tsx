import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { PRODUCT_TITLE_FIELD } from "./ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";

export const ProductShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Brand" source="brand" />
        <TextField label="Category" source="category" />
        <BooleanField label="Has Warranty" source="hasWarranty" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Unit" source="unit" />
        <TextField label="Warranty Days" source="warrantyDays" />
        <ReferenceManyField
          reference="ProductItem"
          target="productId"
          label="ProductItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <BooleanField label="Is Used Product" source="isUsedProduct" />
            <ReferenceField
              label="Location Pop"
              source="pop.id"
              reference="Pop"
            >
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Serial Number" source="serialNumber" />
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PurchaseItem"
          target="productId"
          label="PurchaseItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Quantity" source="quantity" />
            <TextField label="Unit Price" source="unitPrice" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

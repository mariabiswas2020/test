import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";
import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";

export const ProductItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <BooleanField label="Is Used Product" source="isUsedProduct" />
        <ReferenceField label="Location Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Product" source="product.id" reference="Product">
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
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";

export const PurchaseItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PurchaseItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="ID" source="id" />
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
        <TextField label="Quantity" source="quantity" />
        <TextField label="Unit Price" source="unitPrice" />{" "}
      </Datagrid>
    </List>
  );
};

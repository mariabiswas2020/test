import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  DateField,
  ReferenceField,
} from "react-admin";

import { SUPPLIER_TITLE_FIELD } from "./SupplierTitle";

export const SupplierShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Company" source="company" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <ReferenceManyField
          reference="Purchase"
          target="supplierId"
          label="Purchases"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <TextField label="Invoice No" source="invoiceNo" />
            <ReferenceField
              label="Supplier"
              source="supplier.id"
              reference="Supplier"
            >
              <TextField source={SUPPLIER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Total Amount" source="totalAmount" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

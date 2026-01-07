import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  DateField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TOKENCATEGORY_TITLE_FIELD } from "./TokenCategoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TokenCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />
        <ReferenceManyField
          reference="Token"
          target="categoryId"
          label="Tokens"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Assignee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="tokencategory.id"
              reference="TokenCategory"
            >
              <TextField source={TOKENCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Closed At" source="closedAt" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Ticket No" source="ticketNo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

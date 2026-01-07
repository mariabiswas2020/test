import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TICKETCATEGORY_TITLE_FIELD } from "./TicketCategoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TicketCategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="SupportTicket"
          target="categoryId"
          label="SupportTickets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Assignee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="ticketcategory.id"
              reference="TicketCategory"
            >
              <TextField source={TICKETCATEGORY_TITLE_FIELD} />
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
            <TextField label="Priority" source="priority" />
            <TextField label="Resolved At" source="resolvedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Subject" source="subject" />
            <TextField label="Ticket No" source="ticketNo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

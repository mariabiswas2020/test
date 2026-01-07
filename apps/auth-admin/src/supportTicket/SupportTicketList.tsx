import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TICKETCATEGORY_TITLE_FIELD } from "../ticketCategory/TicketCategoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const SupportTicketList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"SupportTickets"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};

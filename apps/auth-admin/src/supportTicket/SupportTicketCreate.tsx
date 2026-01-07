import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TicketCategoryTitle } from "../ticketCategory/TicketCategoryTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const SupportTicketCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="assignee.id" reference="User" label="Assignee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="TicketCategory"
          label="Category"
        >
          <SelectInput optionText={TicketCategoryTitle} />
        </ReferenceInput>
        <DateTimeInput label="Closed At" source="closedAt" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Description" source="description" />
        <SelectInput
          source="priority"
          label="Priority"
          choices={[
            { label: "LOW", value: "LOW" },
            { label: "MEDIUM", value: "MEDIUM" },
            { label: "HIGH", value: "HIGH" },
            { label: "URGENT", value: "URGENT" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <DateTimeInput label="Resolved At" source="resolvedAt" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "OPEN", value: "OPEN" },
            { label: "IN_PROGRESS", value: "IN_PROGRESS" },
            { label: "RESOLVED", value: "RESOLVED" },
            { label: "CLOSED", value: "CLOSED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Subject" source="subject" />
        <TextInput label="Ticket No" source="ticketNo" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

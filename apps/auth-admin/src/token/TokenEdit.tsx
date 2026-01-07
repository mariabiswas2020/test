import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TokenCategoryTitle } from "../tokenCategory/TokenCategoryTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const TokenEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="assignee.id" reference="User" label="Assignee">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="TokenCategory"
          label="Category"
        >
          <SelectInput optionText={TokenCategoryTitle} />
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
        <TextInput label="Ticket No" source="ticketNo" />
      </SimpleForm>
    </Edit>
  );
};

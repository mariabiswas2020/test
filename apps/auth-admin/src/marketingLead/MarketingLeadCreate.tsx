import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";

export const MarketingLeadCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="agent.id" reference="User" label="Agent">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <TextInput label="Map Location" source="mapLocation" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone" source="phone" />
        <NumberInput label="Price Quote" source="priceQuote" />
        <TextInput label="Proposed Package" source="proposedPackage" />
        <TextInput label="Remarks" source="remarks" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "NEW", value: "NEW" },
            { label: "CONTACTED", value: "CONTACTED" },
            { label: "SUCCESS", value: "SUCCESS" },
            { label: "REJECTED", value: "REJECTED" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

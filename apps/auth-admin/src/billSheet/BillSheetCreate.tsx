import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";

export const BillSheetCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <TextInput label="Month" source="month" />
        <NumberInput label="Payable" source="payable" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "PAID", value: "PAID" },
            { label: "UNPAID", value: "UNPAID" },
            { label: "PARTIAL", value: "PARTIAL" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="Year" source="year" />
      </SimpleForm>
    </Create>
  );
};

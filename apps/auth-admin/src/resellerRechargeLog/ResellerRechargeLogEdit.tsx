import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { ResellerTitle } from "../reseller/ResellerTitle";

export const ResellerRechargeLogEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <TextInput label="Note" source="note" />
        <ReferenceInput
          source="reseller.id"
          reference="Reseller"
          label="Reseller"
        >
          <SelectInput optionText={ResellerTitle} />
        </ReferenceInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BILL_PAYMENT", value: "BILL_PAYMENT" },
            { label: "CONNECTION_FEE", value: "CONNECTION_FEE" },
            { label: "OPENING_BALANCE", value: "OPENING_BALANCE" },
            { label: "ADJUSTMENT", value: "ADJUSTMENT" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};

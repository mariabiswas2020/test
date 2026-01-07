import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  SelectInput,
  TextInput,
  ReferenceInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";

export const PopRechargeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <SelectInput
          source="method"
          label="Method"
          choices={[
            { label: "CASH", value: "CASH" },
            { label: "BKASH", value: "BKASH" },
            { label: "NAGAD", value: "NAGAD" },
            { label: "ROCKET", value: "ROCKET" },
            { label: "BANK", value: "BANK" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Performed By" source="performedBy" />
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <TextInput label="Reference" source="reference" />
      </SimpleForm>
    </Edit>
  );
};

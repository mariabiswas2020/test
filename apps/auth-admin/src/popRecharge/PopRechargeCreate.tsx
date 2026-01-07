import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  SelectInput,
  ReferenceInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { PopTitle } from "../pop/PopTitle";

export const PopRechargeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
        <ReferenceInput
          source="performedByUser.id"
          reference="User"
          label="Performed By User"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <TextInput label="Reference" source="reference" />
      </SimpleForm>
    </Create>
  );
};

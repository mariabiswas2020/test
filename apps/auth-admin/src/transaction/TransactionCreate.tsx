import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { CustomerTitle } from "../customer/CustomerTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="Amount" source="amount" />
        <ReferenceInput
          source="collector.id"
          reference="User"
          label="Collector"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="Deleted At" source="deletedAt" />
        <NumberInput label="Discount" source="discount" />
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
        <TextInput label="Note" source="note" />
        <TextInput label="Trx Id" source="trxId" />
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
    </Create>
  );
};

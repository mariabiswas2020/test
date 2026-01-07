import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  DateTimeInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { BillSheetTitle } from "../billSheet/BillSheetTitle";
import { PackageModelTitle } from "../packageModel/PackageModelTitle";
import { PopTitle } from "../pop/PopTitle";
import { TokenTitle } from "../token/TokenTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <NumberInput label="Balance" source="balance" />
        <ReferenceArrayInput source="billSheets" reference="BillSheet">
          <SelectArrayInput
            optionText={BillSheetTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <NumberInput step={1} label="Billing Cycle" source="billingCycle" />
        <TextInput label="Customer Id" source="customerId" />
        <NumberInput label="Due Amount" source="dueAmount" />
        <TextInput label="Email" source="email" />
        <TextInput label="Ip Address" source="ipAddress" />
        <TextInput label="Mac Address" source="macAddress" />
        <NumberInput label="Monthly Bill" source="monthlyBill" />
        <TextInput label="Name" source="name" />
        <TextInput label="Nid" source="nid" />
        <TextInput label="Onu Mac" source="onuMac" />
        <ReferenceInput
          source="packageField.id"
          reference="PackageModel"
          label="Package Field"
        >
          <SelectInput optionText={PackageModelTitle} />
        </ReferenceInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceInput source="pop.id" reference="Pop" label="Pop">
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <TextInput label="Pppoe Password" source="pppoePassword" />
        <TextInput label="Pppoe Username" source="pppoeUsername" />
        <SelectInput
          source="status"
          label="Status"
          choices={[
            { label: "ACTIVE", value: "ACTIVE" },
            { label: "INACTIVE", value: "INACTIVE" },
            { label: "EXPIRED", value: "EXPIRED" },
            { label: "PENDING", value: "PENDING" },
            { label: "DELETED", value: "DELETED" },
            { label: "DISCONNECTED", value: "DISCONNECTED" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput
          label="Temp Extension Active"
          source="tempExtensionActive"
        />
        <DateTimeInput
          label="Temp Extension Expires At"
          source="tempExtensionExpiresAt"
        />
        <ReferenceArrayInput source="tokens" reference="Token">
          <SelectArrayInput
            optionText={TokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="transactions" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};

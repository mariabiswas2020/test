import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { ActivityLogTitle } from "../activityLog/ActivityLogTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { MarketingLeadTitle } from "../marketingLead/MarketingLeadTitle";
import { ResellerTitle } from "../reseller/ResellerTitle";
import { TokenTitle } from "../token/TokenTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="activityLogs" reference="ActivityLog">
          <SelectArrayInput
            optionText={ActivityLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="collectedBills" reference="Transaction">
          <SelectArrayInput
            optionText={TransactionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Email" source="email" type="email" />
        <ReferenceInput
          source="employeeProfile.id"
          reference="Employee"
          label="Employee Profile"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <TextInput label="First Name" source="firstName" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="marketingLeads" reference="MarketingLead">
          <SelectArrayInput
            optionText={MarketingLeadTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Password" source="password" />
        <div />
        <TextInput label="Phone" source="phone" />
        <ReferenceInput
          source="resellerProfile.id"
          reference="Reseller"
          label="Reseller Profile"
        >
          <SelectInput optionText={ResellerTitle} />
        </ReferenceInput>
        <SelectInput
          source="roles"
          label="Roles"
          choices={[
            { label: "SUPER_ADMIN", value: "SUPER_ADMIN" },
            { label: "MANAGER", value: "MANAGER" },
            { label: "ACCOUNTANT", value: "ACCOUNTANT" },
            { label: "SUPPORT", value: "SUPPORT" },
            { label: "CABLE_TEAM", value: "CABLE_TEAM" },
            { label: "BILL_MAN", value: "BILL_MAN" },
            { label: "MARKETING_AGENT", value: "MARKETING_AGENT" },
            { label: "RESELLER", value: "RESELLER" },
            { label: "SUB_RESELLER", value: "SUB_RESELLER" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceArrayInput source="supportTickets" reference="Token">
          <SelectArrayInput
            optionText={TokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};

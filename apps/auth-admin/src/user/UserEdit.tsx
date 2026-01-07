import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";

import { AccountTitle } from "../account/AccountTitle";
import { ActivityLogTitle } from "../activityLog/ActivityLogTitle";
import { SupportTicketTitle } from "../supportTicket/SupportTicketTitle";
import { TransactionTitle } from "../transaction/TransactionTitle";
import { EmployeeTitle } from "../employee/EmployeeTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { InvoiceTitle } from "../invoice/InvoiceTitle";
import { MarketingLeadTitle } from "../marketingLead/MarketingLeadTitle";
import { UserPermissionTitle } from "../userPermission/UserPermissionTitle";
import { PopRechargeTitle } from "../popRecharge/PopRechargeTitle";
import { ResellerTitle } from "../reseller/ResellerTitle";
import { SessionTitle } from "../session/SessionTitle";
import { SubscriptionTitle } from "../subscription/SubscriptionTitle";
import { TokenTitle } from "../token/TokenTitle";
import { UsageTitle } from "../usage/UsageTitle";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput source="accounts" reference="Account">
          <SelectArrayInput
            optionText={AccountTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="activityLogs" reference="ActivityLog">
          <SelectArrayInput
            optionText={ActivityLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="assignedTickets" reference="SupportTicket">
          <SelectArrayInput
            optionText={SupportTicketTitle}
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
        <DateTimeInput label="Email Verified" source="emailVerified" />
        <ReferenceInput
          source="employeeProfile.id"
          reference="Employee"
          label="Employee Profile"
        >
          <SelectInput optionText={EmployeeTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="expenses" reference="Expense">
          <SelectArrayInput
            optionText={ExpenseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="First Name" source="firstName" />
        <TextInput label="Image" source="image" />
        <ReferenceArrayInput source="invoices" reference="Invoice">
          <SelectArrayInput
            optionText={InvoiceTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput source="marketingLeads" reference="MarketingLead">
          <SelectArrayInput
            optionText={MarketingLeadTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Password" source="password" />
        <ReferenceArrayInput source="permissions" reference="UserPermission">
          <SelectArrayInput
            optionText={UserPermissionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Phone" source="phone" />
        <ReferenceArrayInput source="popRecharges" reference="PopRecharge">
          <SelectArrayInput
            optionText={PopRechargeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
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
            { label: "USER", value: "USER" },
            { label: "ADMIN", value: "ADMIN" },
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
        <ReferenceArrayInput source="sessions" reference="Session">
          <SelectArrayInput
            optionText={SessionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="subscriptions" reference="Subscription">
          <SelectArrayInput
            optionText={SubscriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="supportTickets" reference="Token">
          <SelectArrayInput
            optionText={TokenTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="tickets" reference="SupportTicket">
          <SelectArrayInput
            optionText={SupportTicketTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="usages" reference="Usage">
          <SelectArrayInput
            optionText={UsageTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};

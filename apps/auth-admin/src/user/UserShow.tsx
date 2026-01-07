import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { TOKENCATEGORY_TITLE_FIELD } from "../tokenCategory/TokenCategoryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <ReferenceField
          label="Employee Profile"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Password" source="password" />
        <TextField label="Permission Routes" source="permissionRoutes" />
        <TextField label="Phone" source="phone" />
        <ReferenceField
          label="Reseller Profile"
          source="reseller.id"
          reference="Reseller"
        >
          <TextField source={RESELLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField
          reference="ActivityLog"
          target="userId"
          label="ActivityLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Action" source="action" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Details" source="details" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Transaction"
          target="collectedBy"
          label="Transactions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <ReferenceField label="Collector" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="date" label="Date" />
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <TextField label="Note" source="note" />
            <TextField label="Trx Id" source="trxId" />
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="MarketingLead"
          target="agentId"
          label="MarketingLeads"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Address" source="address" />
            <ReferenceField label="Agent" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Map Location" source="mapLocation" />
            <TextField label="Name" source="name" />
            <TextField label="Phone" source="phone" />
            <TextField label="Price Quote" source="priceQuote" />
            <TextField label="Proposed Package" source="proposedPackage" />
            <TextField label="Remarks" source="remarks" />
            <TextField label="Status" source="status" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Token"
          target="assignedTo"
          label="Tokens"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Assignee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="tokencategory.id"
              reference="TokenCategory"
            >
              <TextField source={TOKENCATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Closed At" source="closedAt" />
            <DateField source="createdAt" label="Created At" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="Status" source="status" />
            <TextField label="Ticket No" source="ticketNo" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

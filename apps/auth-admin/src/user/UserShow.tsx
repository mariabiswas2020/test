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
import { TICKETCATEGORY_TITLE_FIELD } from "../ticketCategory/TicketCategoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { PERMISSION_TITLE_FIELD } from "../permission/PermissionTitle";
import { PLAN_TITLE_FIELD } from "../plan/PlanTitle";
import { TOKENCATEGORY_TITLE_FIELD } from "../tokenCategory/TokenCategoryTitle";
import { EMPLOYEE_TITLE_FIELD } from "../employee/EmployeeTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Email" source="email" />
        <TextField label="Email Verified" source="emailVerified" />
        <ReferenceField
          label="Employee Profile"
          source="employee.id"
          reference="Employee"
        >
          <TextField source={EMPLOYEE_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Image" source="image" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Name" source="name" />
        <TextField label="Password" source="password" />
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
          reference="Account"
          target="userId"
          label="Accounts"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Access Token" source="accessToken" />
            <TextField label="Expires At" source="expiresAt" />
            <TextField label="ID" source="id" />
            <TextField label="Id Token" source="idToken" />
            <TextField label="Provider" source="provider" />
            <TextField label="Provider Account Id" source="providerAccountId" />
            <TextField label="Refresh Token" source="refreshToken" />
            <TextField label="Scope" source="scope" />
            <TextField label="Session State" source="sessionState" />
            <TextField label="Token Type" source="tokenType" />
            <TextField label="Type Field" source="typeField" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
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
          reference="SupportTicket"
          target="assignedTo"
          label="SupportTickets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Assignee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="ticketcategory.id"
              reference="TicketCategory"
            >
              <TextField source={TICKETCATEGORY_TITLE_FIELD} />
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
            <TextField label="Priority" source="priority" />
            <TextField label="Resolved At" source="resolvedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Subject" source="subject" />
            <TextField label="Ticket No" source="ticketNo" />
            <DateField source="updatedAt" label="Updated At" />
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
            <TextField label="Deleted At" source="deletedAt" />
            <TextField label="Discount" source="discount" />
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <TextField label="Note" source="note" />
            <TextField label="Trx Id" source="trxId" />
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Expense"
          target="addedBy"
          label="Expenses"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Added By User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Amount" source="amount" />
            <TextField label="Category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Pop" source="pop.id" reference="Pop">
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Invoice"
          target="userId"
          label="Invoices"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Description" source="description" />
            <TextField label="Due Date" source="dueDate" />
            <TextField label="ID" source="id" />
            <TextField label="Paid Date" source="paidDate" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
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
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="UserPermission"
          target="userId"
          label="UserPermissions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="grantedAt" label="Granted At" />
            <TextField label="Granted By" source="grantedBy" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Permission"
              source="permission.id"
              reference="Permission"
            >
              <TextField source={PERMISSION_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PopRecharge"
          target="performedBy"
          label="PopRecharges"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <TextField label="Method" source="method" />
            <ReferenceField
              label="Performed By User"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="Pop" source="pop.id" reference="Pop">
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Reference" source="reference" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Session"
          target="userId"
          label="Sessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Expires" source="expires" />
            <TextField label="ID" source="id" />
            <TextField label="Session Token" source="sessionToken" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Subscription"
          target="userId"
          label="Subscriptions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="End Date" source="endDate" />
            <TextField label="ID" source="id" />
            <ReferenceField label="Plan" source="plan.id" reference="Plan">
              <TextField source={PLAN_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="startDate" label="Start Date" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
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
        <ReferenceManyField
          reference="SupportTicket"
          target="userId"
          label="SupportTickets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField label="Assignee" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Category"
              source="ticketcategory.id"
              reference="TicketCategory"
            >
              <TextField source={TICKETCATEGORY_TITLE_FIELD} />
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
            <TextField label="Priority" source="priority" />
            <TextField label="Resolved At" source="resolvedAt" />
            <TextField label="Status" source="status" />
            <TextField label="Subject" source="subject" />
            <TextField label="Ticket No" source="ticketNo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Usage" target="userId" label="Usages">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <DateField source="date" label="Date" />
            <TextField label="Download" source="download" />
            <TextField label="ID" source="id" />
            <TextField label="Total" source="total" />
            <TextField label="Upload" source="upload" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

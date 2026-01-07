import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CUSTOMER_TITLE_FIELD } from "./CustomerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TICKETCATEGORY_TITLE_FIELD } from "../ticketCategory/TicketCategoryTitle";
import { TOKENCATEGORY_TITLE_FIELD } from "../tokenCategory/TokenCategoryTitle";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";

export const CustomerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Balance" source="balance" />
        <TextField label="Billing Cycle" source="billingCycle" />
        <DateField source="connectionDate" label="Connection Date" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Customer Id" source="customerId" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Due Amount" source="dueAmount" />
        <TextField label="Email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="Ip Address" source="ipAddress" />
        <TextField label="Mac Address" source="macAddress" />
        <TextField label="Monthly Bill" source="monthlyBill" />
        <TextField label="Name" source="name" />
        <TextField label="Nid" source="nid" />
        <TextField label="Onu Mac" source="onuMac" />
        <ReferenceField
          label="Package Field"
          source="packagemodel.id"
          reference="PackageModel"
        >
          <TextField source={PACKAGEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Phone" source="phone" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Pppoe Password" source="pppoePassword" />
        <TextField label="Pppoe Username" source="pppoeUsername" />
        <TextField label="Status" source="status" />
        <BooleanField
          label="Temp Extension Active"
          source="tempExtensionActive"
        />
        <TextField
          label="Temp Extension Expires At"
          source="tempExtensionExpiresAt"
        />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="BillSheet"
          target="customerId"
          label="BillSheets"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="generatedAt" label="Generated At" />
            <TextField label="ID" source="id" />
            <TextField label="Month" source="month" />
            <TextField label="Payable" source="payable" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Year" source="year" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="CustomerSession"
          target="customerId"
          label="CustomerSessions"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Bytes In" source="bytesIn" />
            <TextField label="Bytes Out" source="bytesOut" />
            <ReferenceField
              label="Customer"
              source="customer.id"
              reference="Customer"
            >
              <TextField source={CUSTOMER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Ended At" source="endedAt" />
            <TextField label="ID" source="id" />
            <TextField label="Ip Address" source="ipAddress" />
            <DateField source="lastSeenAt" label="Last Seen At" />
            <TextField label="Mac Address" source="macAddress" />
            <TextField label="Session Id" source="sessionId" />
            <DateField source="startedAt" label="Started At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="SupportTicket"
          target="customerId"
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
          reference="Token"
          target="customerId"
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
          reference="Transaction"
          target="customerId"
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
      </SimpleShowLayout>
    </Show>
  );
};

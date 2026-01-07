import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "./PackageModelTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const PackageModelShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Mikro Tik Profile" source="mikroTikProfile" />
        <TextField label="Name" source="name" />
        <TextField label="Price" source="price" />
        <TextField label="Speed" source="speed" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Customer"
          target="packageId"
          label="Customers"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="ResellerPackage"
          target="packageId"
          label="ResellerPackages"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <ReferenceField
              label="Package Field"
              source="packagemodel.id"
              reference="PackageModel"
            >
              <TextField source={PACKAGEMODEL_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Reseller"
              source="reseller.id"
              reference="Reseller"
            >
              <TextField source={RESELLER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Wholesale Price" source="wholesalePrice" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { POP_TITLE_FIELD } from "./PopTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { PURCHASE_TITLE_FIELD } from "../purchase/PurchaseTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const PopShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Balance" source="balance" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parent Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Reseller"
          source="reseller.id"
          reference="Reseller"
        >
          <TextField source={RESELLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Customer"
          target="popId"
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
        <ReferenceManyField reference="Expense" target="popId" label="Expenses">
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
          reference="ProductItem"
          target="locationPopId"
          label="ProductItems"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Used Product" source="isUsedProduct" />
            <ReferenceField
              label="Location Pop"
              source="pop.id"
              reference="Pop"
            >
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Product"
              source="product.id"
              reference="Product"
            >
              <TextField source={PRODUCT_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Purchase"
              source="purchase.id"
              reference="Purchase"
            >
              <TextField source={PURCHASE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Serial Number" source="serialNumber" />
            <TextField label="Status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="PopRecharge"
          target="popId"
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
          reference="MikroTikRouter"
          target="popId"
          label="MikroTikRouters"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Api Password" source="apiPassword" />
            <TextField label="Api Port" source="apiPort" />
            <TextField label="Api User" source="apiUser" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="Host" source="host" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Pop" source="pop.id" reference="Pop">
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Pop" target="parentId" label="Pops">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Address" source="address" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Balance" source="balance" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Name" source="name" />
            <ReferenceField label="Parent Pop" source="pop.id" reference="Pop">
              <TextField source={POP_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Reseller"
              source="reseller.id"
              reference="Reseller"
            >
              <TextField source={RESELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

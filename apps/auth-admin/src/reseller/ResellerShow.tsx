import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { RESELLER_TITLE_FIELD } from "./ResellerTitle";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ResellerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Business Name" source="businessName" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="ResellerPackage"
          target="resellerId"
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
        <ReferenceManyField reference="Pop" target="resellerId" label="Pops">
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
        <ReferenceManyField
          reference="ResellerRechargeLog"
          target="resellerId"
          label="ResellerRechargeLogs"
        >
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Amount" source="amount" />
            <DateField source="date" label="Date" />
            <TextField label="ID" source="id" />
            <TextField label="Note" source="note" />
            <ReferenceField
              label="Reseller"
              source="reseller.id"
              reference="Reseller"
            >
              <TextField source={RESELLER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Type" source="type" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

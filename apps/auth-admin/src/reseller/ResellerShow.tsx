import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  DateField,
} from "react-admin";

import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { POP_TITLE_FIELD } from "../pop/PopTitle";
import { RESELLER_TITLE_FIELD } from "./ResellerTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ResellerShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Balance" source="balance" />
        <TextField label="Business Name" source="businessName" />
        <TextField label="ID" source="id" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField reference="Pop" target="resellerId" label="Pops">
          <Datagrid rowClick="show" bulkActionButtons={false}>
            <TextField label="Address" source="address" />
            <ReferenceField label="Area" source="area.id" reference="Area">
              <TextField source={AREA_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Balance" source="balance" />
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

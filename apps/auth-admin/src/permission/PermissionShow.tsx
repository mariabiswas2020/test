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
} from "react-admin";

import { PERMISSION_TITLE_FIELD } from "./PermissionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const PermissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Route" source="route" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="UserPermission"
          target="permissionId"
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
      </SimpleShowLayout>
    </Show>
  );
};

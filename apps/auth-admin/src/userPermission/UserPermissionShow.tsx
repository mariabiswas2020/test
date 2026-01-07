import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { PERMISSION_TITLE_FIELD } from "../permission/PermissionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserPermissionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

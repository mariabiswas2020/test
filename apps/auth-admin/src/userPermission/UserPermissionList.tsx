import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { PERMISSION_TITLE_FIELD } from "../permission/PermissionTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UserPermissionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"UserPermissions"}
      perPage={50}
      pagination={<Pagination />}
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
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};

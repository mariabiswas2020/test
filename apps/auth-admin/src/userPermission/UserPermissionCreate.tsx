import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PermissionTitle } from "../permission/PermissionTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPermissionCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Granted By" source="grantedBy" />
        <ReferenceInput
          source="permission.id"
          reference="Permission"
          label="Permission"
        >
          <SelectInput optionText={PermissionTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { PermissionTitle } from "../permission/PermissionTitle";
import { UserTitle } from "../user/UserTitle";

export const UserPermissionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

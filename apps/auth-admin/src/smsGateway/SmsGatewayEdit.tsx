import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SmsLogTitle } from "../smsLog/SmsLogTitle";

export const SmsGatewayEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Api Key" source="apiKey" />
        <TextInput label="Api Secret" source="apiSecret" />
        <TextInput label="Api Url" source="apiUrl" />
        <BooleanInput label="Is Active" source="isActive" />
        <BooleanInput label="Is Default" source="isDefault" />
        <ReferenceArrayInput source="logs" reference="SmsLog">
          <SelectArrayInput
            optionText={SmsLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <TextInput label="Provider" source="provider" />
        <TextInput label="Sender Id" source="senderId" />
      </SimpleForm>
    </Edit>
  );
};

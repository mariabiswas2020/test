import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { PopTitle } from "../pop/PopTitle";
import { ResellerRechargeLogTitle } from "../resellerRechargeLog/ResellerRechargeLogTitle";
import { UserTitle } from "../user/UserTitle";

export const ResellerEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Balance" source="balance" />
        <TextInput label="Business Name" source="businessName" />
        <ReferenceArrayInput source="pops" reference="Pop">
          <SelectArrayInput
            optionText={PopTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="rechargeLogs"
          reference="ResellerRechargeLog"
        >
          <SelectArrayInput
            optionText={ResellerRechargeLogTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};

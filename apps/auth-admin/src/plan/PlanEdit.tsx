import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
  NumberInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { SubscriptionTitle } from "../subscription/SubscriptionTitle";

export const PlanEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Description" source="description" />
        <TextInput label="Features" source="features" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <NumberInput label="Price" source="price" />
        <SelectInput
          source="speed"
          label="Speed"
          choices={[
            { label: "MBPS_100", value: "MBPS_100" },
            { label: "MBPS_500", value: "MBPS_500" },
            { label: "GBPS_1", value: "GBPS_1" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="Speed Display" source="speedDisplay" />
        <ReferenceArrayInput source="subscriptions" reference="Subscription">
          <SelectArrayInput
            optionText={SubscriptionTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};

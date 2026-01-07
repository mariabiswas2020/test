import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
  SelectInput,
} from "react-admin";

export const SmsTemplateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Content" source="content" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "BILLING_REMINDER", value: "BILLING_REMINDER" },
            { label: "PAYMENT_CONFIRMATION", value: "PAYMENT_CONFIRMATION" },
            { label: "CONNECTION_NOTICE", value: "CONNECTION_NOTICE" },
            { label: "EXPIRY_WARNING", value: "EXPIRY_WARNING" },
            { label: "CUSTOM", value: "CUSTOM" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

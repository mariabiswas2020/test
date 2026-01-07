import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { PackageModelTitle } from "../packageModel/PackageModelTitle";
import { ResellerTitle } from "../reseller/ResellerTitle";

export const ResellerPackageCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="Is Active" source="isActive" />
        <ReferenceInput
          source="packageField.id"
          reference="PackageModel"
          label="Package Field"
        >
          <SelectInput optionText={PackageModelTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="reseller.id"
          reference="Reseller"
          label="Reseller"
        >
          <SelectInput optionText={ResellerTitle} />
        </ReferenceInput>
        <NumberInput label="Wholesale Price" source="wholesalePrice" />
      </SimpleForm>
    </Create>
  );
};

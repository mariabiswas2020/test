import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { AreaTitle } from "../area/AreaTitle";
import { CustomerTitle } from "../customer/CustomerTitle";
import { ExpenseTitle } from "../expense/ExpenseTitle";
import { PopTitle } from "./PopTitle";
import { ProductItemTitle } from "../productItem/ProductItemTitle";
import { PopRechargeTitle } from "../popRecharge/PopRechargeTitle";
import { ResellerTitle } from "../reseller/ResellerTitle";

export const PopCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="area.id" reference="Area" label="Area">
          <SelectInput optionText={AreaTitle} />
        </ReferenceInput>
        <NumberInput label="Balance" source="balance" />
        <ReferenceArrayInput source="customers" reference="Customer">
          <SelectArrayInput
            optionText={CustomerTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="expenses" reference="Expense">
          <SelectArrayInput
            optionText={ExpenseTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <TextInput label="Name" source="name" />
        <ReferenceInput
          source="parentPop.id"
          reference="Pop"
          label="Parent Pop"
        >
          <SelectInput optionText={PopTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="products" reference="ProductItem">
          <SelectArrayInput
            optionText={ProductItemTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceArrayInput source="rechargeHistory" reference="PopRecharge">
          <SelectArrayInput
            optionText={PopRechargeTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <ReferenceInput
          source="reseller.id"
          reference="Reseller"
          label="Reseller"
        >
          <SelectInput optionText={ResellerTitle} />
        </ReferenceInput>
        <ReferenceArrayInput source="subPops" reference="Pop">
          <SelectArrayInput
            optionText={PopTitle}
            parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
            format={(value: any) => value && value.map((v: any) => v.id)}
          />
        </ReferenceArrayInput>
        <SelectInput
          source="type"
          label="Type"
          choices={[
            { label: "MAIN", value: "MAIN" },
            { label: "RESELLER", value: "RESELLER" },
            { label: "SUB_POP", value: "SUB_POP" },
          ]}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};

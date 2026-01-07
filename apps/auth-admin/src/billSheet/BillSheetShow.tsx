import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const BillSheetShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="generatedAt" label="Generated At" />
        <TextField label="ID" source="id" />
        <TextField label="Month" source="month" />
        <TextField label="Payable" source="payable" />
        <TextField label="Status" source="status" />
        <TextField label="Year" source="year" />
      </SimpleShowLayout>
    </Show>
  );
};

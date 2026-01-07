import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const ResellerRechargeLogShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Amount" source="amount" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Note" source="note" />
        <ReferenceField
          label="Reseller"
          source="reseller.id"
          reference="Reseller"
        >
          <TextField source={RESELLER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Type" source="type" />
      </SimpleShowLayout>
    </Show>
  );
};

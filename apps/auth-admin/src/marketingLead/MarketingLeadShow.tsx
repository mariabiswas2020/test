import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MarketingLeadShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Address" source="address" />
        <ReferenceField label="Agent" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Map Location" source="mapLocation" />
        <TextField label="Name" source="name" />
        <TextField label="Phone" source="phone" />
        <TextField label="Price Quote" source="priceQuote" />
        <TextField label="Proposed Package" source="proposedPackage" />
        <TextField label="Remarks" source="remarks" />
        <TextField label="Status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};

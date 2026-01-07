import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const MarketingLeadList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MarketingLeads"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Status" source="status" />{" "}
      </Datagrid>
    </List>
  );
};

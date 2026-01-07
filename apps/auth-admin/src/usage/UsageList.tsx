import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const UsageList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Usages"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <DateField source="date" label="Date" />
        <TextField label="Download" source="download" />
        <TextField label="ID" source="id" />
        <TextField label="Total" source="total" />
        <TextField label="Upload" source="upload" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>{" "}
      </Datagrid>
    </List>
  );
};

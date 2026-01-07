import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TOKENCATEGORY_TITLE_FIELD } from "../tokenCategory/TokenCategoryTitle";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TokenList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Tokens"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <ReferenceField label="Assignee" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Category"
          source="tokencategory.id"
          reference="TokenCategory"
        >
          <TextField source={TOKENCATEGORY_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Closed At" source="closedAt" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="Status" source="status" />
        <TextField label="Ticket No" source="ticketNo" />{" "}
      </Datagrid>
    </List>
  );
};

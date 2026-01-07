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
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <ReferenceField label="Collector" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="date" label="Date" />
        <TextField label="Deleted At" source="deletedAt" />
        <TextField label="Discount" source="discount" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <TextField label="Note" source="note" />
        <TextField label="Trx Id" source="trxId" />
        <TextField label="Type" source="type" />
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

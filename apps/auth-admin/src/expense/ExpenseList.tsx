import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { POP_TITLE_FIELD } from "../pop/PopTitle";

export const ExpenseList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"Expenses"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Added By" source="addedBy" />
        <TextField label="Amount" source="amount" />
        <TextField label="Category" source="category" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Title" source="title" />{" "}
      </Datagrid>
    </List>
  );
};

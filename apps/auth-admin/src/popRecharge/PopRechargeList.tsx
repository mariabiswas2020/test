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

export const PopRechargeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"PopRecharges"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Amount" source="amount" />
        <DateField source="date" label="Date" />
        <TextField label="ID" source="id" />
        <TextField label="Method" source="method" />
        <TextField label="Performed By" source="performedBy" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Reference" source="reference" />{" "}
      </Datagrid>
    </List>
  );
};

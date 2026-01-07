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
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const ResellerRechargeLogList = (
  props: ListProps
): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ResellerRechargeLogs"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
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
        <TextField label="Type" source="type" />{" "}
      </Datagrid>
    </List>
  );
};

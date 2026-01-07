import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { AREA_TITLE_FIELD } from "../area/AreaTitle";
import { POP_TITLE_FIELD } from "./PopTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const PopList = (props: ListProps): React.ReactElement => {
  return (
    <List {...props} title={"Pops"} perPage={50} pagination={<Pagination />}>
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Address" source="address" />
        <ReferenceField label="Area" source="area.id" reference="Area">
          <TextField source={AREA_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="Balance" source="balance" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Parent Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
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

import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { POP_TITLE_FIELD } from "../pop/PopTitle";

export const MikroTikRouterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"MikroTikRouters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="Api Password" source="apiPassword" />
        <TextField label="Api Port" source="apiPort" />
        <TextField label="Api User" source="apiUser" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Host" source="host" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <ReferenceField label="Pop" source="pop.id" reference="Pop">
          <TextField source={POP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />{" "}
      </Datagrid>
    </List>
  );
};

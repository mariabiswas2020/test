import * as React from "react";

import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  BooleanField,
  ReferenceField,
} from "react-admin";

import Pagination from "../Components/Pagination";
import { PACKAGEMODEL_TITLE_FIELD } from "../packageModel/PackageModelTitle";
import { RESELLER_TITLE_FIELD } from "../reseller/ResellerTitle";

export const ResellerPackageList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ResellerPackages"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <ReferenceField
          label="Package Field"
          source="packagemodel.id"
          reference="PackageModel"
        >
          <TextField source={PACKAGEMODEL_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="Reseller"
          source="reseller.id"
          reference="Reseller"
        >
          <TextField source={RESELLER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Wholesale Price" source="wholesalePrice" />{" "}
      </Datagrid>
    </List>
  );
};

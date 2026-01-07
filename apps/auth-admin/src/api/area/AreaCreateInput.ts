import { CustomerCreateNestedManyWithoutAreasInput } from "./CustomerCreateNestedManyWithoutAreasInput";
import { PopCreateNestedManyWithoutAreasInput } from "./PopCreateNestedManyWithoutAreasInput";

export type AreaCreateInput = {
  customers?: CustomerCreateNestedManyWithoutAreasInput;
  description?: string | null;
  name: string;
  pops?: PopCreateNestedManyWithoutAreasInput;
};

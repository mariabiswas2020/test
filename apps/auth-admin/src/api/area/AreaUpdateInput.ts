import { CustomerUpdateManyWithoutAreasInput } from "./CustomerUpdateManyWithoutAreasInput";
import { PopUpdateManyWithoutAreasInput } from "./PopUpdateManyWithoutAreasInput";

export type AreaUpdateInput = {
  customers?: CustomerUpdateManyWithoutAreasInput;
  description?: string | null;
  name?: string;
  pops?: PopUpdateManyWithoutAreasInput;
};

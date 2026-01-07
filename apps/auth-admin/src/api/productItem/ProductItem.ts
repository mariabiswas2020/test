import { Pop } from "../pop/Pop";
import { Product } from "../product/Product";
import { Purchase } from "../purchase/Purchase";

export type ProductItem = {
  id: string;
  isUsedProduct: boolean;
  locationPop?: Pop | null;
  product?: Product;
  purchase?: Purchase | null;
  serialNumber: string;
  status?: "IN_STOCK" | "SOLD" | "DEPLOYED" | "RETURNED" | "DAMAGED";
};

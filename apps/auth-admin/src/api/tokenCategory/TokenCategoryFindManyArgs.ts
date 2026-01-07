import { TokenCategoryWhereInput } from "./TokenCategoryWhereInput";
import { TokenCategoryOrderByInput } from "./TokenCategoryOrderByInput";

export type TokenCategoryFindManyArgs = {
  where?: TokenCategoryWhereInput;
  orderBy?: Array<TokenCategoryOrderByInput>;
  skip?: number;
  take?: number;
};

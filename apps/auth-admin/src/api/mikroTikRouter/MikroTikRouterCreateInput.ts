import { PopWhereUniqueInput } from "../pop/PopWhereUniqueInput";

export type MikroTikRouterCreateInput = {
  apiPassword: string;
  apiPort: number;
  apiUser: string;
  host: string;
  isActive: boolean;
  name: string;
  pop?: PopWhereUniqueInput | null;
};

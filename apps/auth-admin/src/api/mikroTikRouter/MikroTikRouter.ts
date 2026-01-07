import { Pop } from "../pop/Pop";

export type MikroTikRouter = {
  apiPassword: string;
  apiPort: number;
  apiUser: string;
  createdAt: Date;
  host: string;
  id: string;
  isActive: boolean;
  name: string;
  pop?: Pop | null;
  updatedAt: Date;
};

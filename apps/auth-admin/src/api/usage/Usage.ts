import { User } from "../user/User";

export type Usage = {
  createdAt: Date;
  date: Date;
  download: number;
  id: string;
  total: number;
  upload: number;
  user?: User;
};

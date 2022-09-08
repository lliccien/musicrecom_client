import { Genre } from './genre';

export interface User {
  id?: string;
  username: string;
  password: string;
  genres?: Genre[];
  role?: string;
}

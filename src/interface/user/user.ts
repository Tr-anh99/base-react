// import type { Role } from './login'
export type Role = 'student' | 'admin';

export interface UserState {
  username: string;

  logged: boolean;

  role: Role;
}

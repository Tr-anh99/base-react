import { Device } from '../layout/index.interface';

// import type { Role } from './login'
export type Role = 'student' | 'admin';

export interface UserState {
  /** user's device */
  device: Device;
  isMobile: boolean;

  username: string;

  logged: boolean;

  role: Role;
}

import { Device } from '../layout/index.interface';

// import type { Role } from './login'
export type Role = 'student' | 'admin';

export interface UserState {
  /** user's device */
  device: Device;
  isMobile: boolean;
  isAndroid: boolean;

  username: string;

  logged: boolean;

  role: Role;
}

export interface User {
  id: string | number;
  name: string;
  email: string;
  isActive: boolean;
  role: ROLE;
  avatar: string;
  freeQuestion: number;
  minutesRemaining?: string;
  timesRemaining?: number;
}
export enum ROLE {
  student = 'student',
  tutor = 'tutor',
  sysadmin = 'sysadmin',
}
export interface ApiReturn<T> {
  message: string;
  data: T[];
  paginate: Paginate;
}
export interface ApiReturnAdmin<T> extends ApiReturn<T> {
  totalUser: number;
}
export interface ApiReturnDashboard<T> {
  message: string;
  data: T;
}
export interface ApiReturnMoreInfo<T> {
  message: string;
  data: T;
  paginate: Paginate;
}
export interface Paginate {
  itemsPerPage: number;
  page?: number;
  total_pages?: number;
  totalPages: number;
}
export type Notification = {
  countNotificationQuestion: number;
};

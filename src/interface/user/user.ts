// import { Device } from '../layout/index.interface';

export interface User {
  id: string | number;
  name: string;
  email: string;
  isActive: boolean;
  role: ROLE;
  avatar: string;

  // /** user's device */
  // device: Device;
  // isMobile: boolean;
  // isAndroid: boolean;
}
export enum ROLE {
  user = 'student',
  admin = 'admin',
}
export interface ApiReturn<T> {
  message: string;
  data: T[];
  paginate: Paginate;
}

export interface Paginate {
  itemsPerPage: number;
  page?: number;
  total_pages?: number;
  totalPages: number;
}

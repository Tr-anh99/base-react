import { User } from '../user/user';
import { Device } from '../layout/index.interface';

export interface AuthState {
  /** user's device */
  device: Device;
  isMobile: boolean;
  isAndroid: boolean;

  logged: boolean;
  currentUser?: User;
  loading: boolean;
  loadingInfo: boolean;
  errorMessage: any;
}

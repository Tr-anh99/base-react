export interface LoginParams {
  email: string;
  password: string;
  extend?: string;
}

export interface LoginResult {
  token: string;
  // username: string;
  // role: Role;
}

export interface LogoutParams {
  token: string;
}

export interface LogoutResult {}

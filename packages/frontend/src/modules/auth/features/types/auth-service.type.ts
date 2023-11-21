export interface RegisterUserData {
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginUserData {
  email: string;
  password: string;
}
export interface ResetPasswordData {
  token: string;
  password: string;
  confirmPassword: string;
}
export interface ResetPasswordRequestData {
  email: string;
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

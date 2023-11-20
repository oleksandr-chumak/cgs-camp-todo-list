export type TokenType = 'access' | 'refresh';

export interface JWTTokens {
  accessToken: string;
  refreshToken: string;
}

export interface JWTPayload {
  id: number;
}

export interface ResetPasswordPayload {
  email: string;
}

export interface IEntityWithUser {
  user: { id: number };
}

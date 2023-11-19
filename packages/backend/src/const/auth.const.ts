import * as process from 'process';
import { TokenType } from '../types/auth.type';

export const TOKEN_SECRET: Record<TokenType, string> = {
  access: process.env.ACCESS_SECRET!,
  refresh: process.env.REFRESH_SECRET!
};

export const TOKEN_EXPIRES_IN: Record<TokenType, string> = {
  access: process.env.ACCESS_EXPIRES_IN!,
  refresh: process.env.REFRESH_EXPIRES_IN!
};

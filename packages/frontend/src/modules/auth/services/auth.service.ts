import { HttpService } from '../../common/services/http.service';
import { BACKEND_KEYS } from '../../common/consts/app-keys.const';
import {
  LoginUserData,
  RegisterUserData,
  ResetPasswordData,
  ResetPasswordRequestData,
  Tokens
} from '../features/types/auth-service.type';
import { TokenService } from './token.service';

export class AuthService extends HttpService {
  constructor() {
    super();
    this.init();
  }

  async register(data: RegisterUserData): Promise<string> {
    const response = await this.post<string>({ url: `${BACKEND_KEYS.AUTH}/register`, data });
    return response.data;
  }

  async login(data: LoginUserData) {
    const response = await this.post<Tokens>({ url: `${BACKEND_KEYS.AUTH}/login`, data });
    const { accessToken }: Tokens = response.data;
    TokenService.saveToken(accessToken);
  }

  async resetPassword(data: ResetPasswordData): Promise<string> {
    const { token, ...resetData } = data;
    const response = await this.put<string>({
      url: `${BACKEND_KEYS.AUTH}/reset-password/${token}`,
      data: resetData
    });
    return response.data;
  }

  async resetPasswordRequest(data: ResetPasswordRequestData): Promise<string> {
    const response = await this.post<string>({
      url: `${BACKEND_KEYS.AUTH}/reset-password-request`,
      data
    });
    return response.data;
  }

  async logout(): Promise<string> {
    const response = await this.get<string>({ url: `${BACKEND_KEYS.AUTH}/logout` }, true);
    TokenService.deleteToken();
    return response.data;
  }

  private init() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.resetPasswordRequest = this.resetPasswordRequest.bind(this);
    this.logout = this.logout.bind(this);
  }
}

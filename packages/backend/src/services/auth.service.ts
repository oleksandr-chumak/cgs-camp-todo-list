import * as bcrypt from 'bcryptjs';
import { UpdateResult } from 'typeorm';
import { RegistrationDto } from '../dto/auth/registration.dto';
import { UserService } from './user.service';
import { UserEntity } from '../entities';
import { LoginDto } from '../dto/auth/login.dto';
import { ResetPasswordPayload } from '../types/auth.type';
import { NotFoundException } from '../shared/exception';

export class AuthService {
  constructor(private readonly userService: UserService) {
    this.init();
  }

  async login(data: LoginDto, userEntity: UserEntity): Promise<boolean> {
    return bcrypt.compare(data.password, userEntity.credentials.password);
  }

  async register(data: RegistrationDto): Promise<UserEntity> {
    const salt: string = bcrypt.genSaltSync(10);
    data.password = await bcrypt.hash(data.password, salt);

    const { confirmPassword, ...dataWithoutConfirmPassword } = data;

    return this.userService.store(dataWithoutConfirmPassword);
  }

  async resetPassword(password: string, token: ResetPasswordPayload): Promise<UpdateResult> {
    const salt: string = await bcrypt.genSalt(10);
    const hashedPassword: string = await bcrypt.hash(password, salt);

    const userEntity: UserEntity | null = await this.userService.show(
      { credentials: { email: token.email } },
      { credentials: true }
    );

    if (!userEntity) {
      throw new NotFoundException('User not found');
    }

    return this.userService.update(userEntity, { password: hashedPassword });
  }

  async confirmAccount(id: number): Promise<UpdateResult> {
    const userEntity: UserEntity | null = await this.userService.show(
      { id },
      { credentials: true }
    );

    if (!userEntity) {
      throw new NotFoundException('User not found');
    }

    return this.userService.update(userEntity, { isVerified: true });
  }

  private init() {
    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }
}

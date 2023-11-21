import { NextFunction, Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import { matchedData } from 'express-validator/filter';
import { UserService } from '../services/user.service';
import { RequestWithUser } from '../types/request.type';
import { UpdateUserDto } from '../dto/user/update-user.dto';
import { BadRequestException } from '../shared/exception';

export class UserController {
  constructor(private readonly userService: UserService) {
    this.init();
  }

  async show(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user }: RequestWithUser = req as RequestWithUser;
      const { id, credentials, ...timestamps } = user!;
      res.status(200).send({ id, email: credentials.email, ...timestamps });
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user } = req as RequestWithUser;

      const updateUserData: UpdateUserDto = matchedData(req, {
        locations: ['body']
      }) as UpdateUserDto;

      const isPasswordsEqual: boolean = await bcrypt.compare(
        updateUserData.oldPassword,
        user!.credentials.password
      );

      if (!isPasswordsEqual) {
        throw new BadRequestException('Invalid old password');
      }

      if (updateUserData.password) {
        const salt = await bcrypt.genSalt(10);
        updateUserData.password = await bcrypt.hash(updateUserData.password, salt);
      }

      await this.userService.update(user!, { password: updateUserData.password });

      res.send('User successfully updated');
    } catch (e) {
      next(e);
    }
  }

  private init() {
    this.update = this.update.bind(this);
    this.show = this.show.bind(this);
  }
}

import {
  DeserializedUserWithTimestampsAndId,
  UpdateUserData
} from '../features/types/user-service.type';
import { HttpService } from '../../common/services/http.service';
import { BACKEND_KEYS } from '../../common/consts/app-keys.const';
import { UserModel } from '../models/user.model';

export class UserService extends HttpService {
  constructor() {
    super();
    this.init();
  }

  async getUser(): Promise<UserModel> {
    const response = await this.get<DeserializedUserWithTimestampsAndId>(
      { url: `${BACKEND_KEYS.USER}` },
      true
    );
    const userModel: UserModel = new UserModel(response.data);
    return userModel;
  }

  async updateUser(data: UpdateUserData): Promise<string> {
    const { id, ...updateData } = data;
    const response = await this.put<string>(
      { url: `${BACKEND_KEYS.USER}/${id}`, data: updateData },
      true
    );
    return response.data;
  }

  private init() {
    this.getUser = this.getUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }
}

import {
  DeserializedUserWithTimestampsAndId,
  UserWithTimestampsAndId
} from '../features/types/user-service.type';

export class UserModel implements UserWithTimestampsAndId {
  id: number;

  email: string;

  createdAt: Date;

  updatedAt: Date;

  constructor(userData: DeserializedUserWithTimestampsAndId) {
    this.id = userData.id;
    this.email = userData.email;
    this.createdAt = new Date(userData.createdAt);
    this.updatedAt = new Date(userData.updatedAt);
  }
}

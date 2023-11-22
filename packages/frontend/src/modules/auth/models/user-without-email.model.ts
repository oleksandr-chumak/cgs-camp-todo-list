import {
  DeserializedUserWithoutEmail,
  UserWithoutEmail
} from '../features/types/user-service.type';

export class UserWithoutEmailModel implements UserWithoutEmail {
  id: number;

  createdAt: Date;

  updatedAt: Date;

  constructor(userData: DeserializedUserWithoutEmail) {
    this.id = userData.id;
    this.createdAt = new Date(userData.createdAt);
    this.updatedAt = new Date(userData.updatedAt);
  }
}

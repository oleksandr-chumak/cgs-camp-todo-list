import {
  DeserializedModelWithIdAndTimestamps,
  ModelWithIdAndTimestamps
} from '../../../common/types/services';

export interface UpdateUserData {
  id: number;
  oldPassword: string;
  password: string;
  confirmPassword: string;
}

export interface User {
  email: string;
}

export type DeserializedUserWithTimestampsAndId = DeserializedModelWithIdAndTimestamps<User>;

export type DeserializedUserWithoutEmail = DeserializedModelWithIdAndTimestamps<{}>;

export type UserWithTimestampsAndId = ModelWithIdAndTimestamps<User>;

export type UserWithoutEmail = ModelWithIdAndTimestamps<{}>;

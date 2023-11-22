import {
  ACCESS,
  DeserializedTodoWithIdAndTimestamps,
  STATUS,
  TodoWithIdAndTimestamps
} from '../features/types/todos.type';
import { UserWithoutEmailModel } from '../../auth/models/user-without-email.model';

export class TodoModel implements TodoWithIdAndTimestamps {
  id: number;

  title: string;

  content: string;

  status: STATUS;

  access: ACCESS;

  user: UserWithoutEmailModel;

  createdAt: Date;

  updatedAt: Date;

  constructor(deserializedData: DeserializedTodoWithIdAndTimestamps) {
    this.id = deserializedData.id;
    this.title = deserializedData.title;
    this.content = deserializedData.content;
    this.status = deserializedData.status;
    this.access = deserializedData.access;
    this.user = new UserWithoutEmailModel(deserializedData.user);
    this.createdAt = new Date(deserializedData.createdAt);
    this.updatedAt = new Date(deserializedData.updatedAt);
  }

  get formattedDate(): string {
    const months: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ];

    const day: number = this.createdAt.getDate();
    const monthIndex: number = this.createdAt.getMonth();
    const year: number = this.createdAt.getFullYear();

    return `${day} ${months[monthIndex]} ${year}`;
  }
}

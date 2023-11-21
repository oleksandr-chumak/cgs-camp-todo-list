export type ModelWithIdAndTimestamps<T> = T & {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export type DeserializedModelWithIdAndTimestamps<T> = T & {
  id: number;
  createdAt: Date;
  updatedAt: Date;
};

export interface HttpException {
  error: string;
  message: string;
  status: number;
}

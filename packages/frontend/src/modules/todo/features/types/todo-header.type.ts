export enum TodoNavigationName {
  ALL = 'all',
  PUBLIC = 'public',
  PRIVATE = 'private',
  COMPLETED = 'completed'
}

export interface TodoNavigationProps {
  text: string;
  name: TodoNavigationName;
  currentName: TodoNavigationName;
}

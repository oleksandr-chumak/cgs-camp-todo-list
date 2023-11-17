import { HttpService } from '../../common/services/http.service';
import {
  DeserializedGetTodos,
  DeserializedTodoWithIdAndTimestamps,
  GetTodos,
  UpdateTodo
} from '../features/types/todos.type';
import { TodoModel } from '../models/todo.model';
import { ICreateTodo } from '../features/types/todo-service.type';

class TodoService extends HttpService {
  constructor() {
    super();
    this.init();
  }

  async getTodos(): Promise<GetTodos> {
    const response = await this.get<DeserializedGetTodos>({ url: 'todos', params: { limit: 6 } });
    const serializedTodos: TodoModel[] = response.data.todos.map((todo) => new TodoModel(todo));
    return {
      todos: serializedTodos,
      totalCount: response.data.totalCount
    };
  }

  async getTodo(id: number): Promise<TodoModel> {
    const response = await this.get<DeserializedTodoWithIdAndTimestamps>({ url: `todos/${id}` });
    return new TodoModel(response.data);
  }

  async createTodo(data: ICreateTodo): Promise<DeserializedTodoWithIdAndTimestamps> {
    const response = await this.post<DeserializedTodoWithIdAndTimestamps>({ url: 'todos', data });
    return response.data;
  }

  async updateTodo(updateData: UpdateTodo): Promise<string> {
    const { id, ...updateDataWithoutId } = updateData;
    const response = await this.put<string>({
      url: `todos/${id}`,
      data: updateDataWithoutId
    });
    return response.data;
  }

  async deleteTodo(id: number): Promise<string> {
    const response = await this.delete<string>({ url: `todos/${id}` });
    return response.data;
  }

  private init(): void {
    this.getTodos = this.getTodos.bind(this);
    this.getTodo = this.getTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
}

export default TodoService;

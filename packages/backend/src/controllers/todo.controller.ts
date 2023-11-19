import { NextFunction, Request, Response } from 'express';
import { matchedData } from 'express-validator/filter';
import TodoService from '../services/todo.service';
import { CreateTodoDto, UpdateTodoDto } from '../dto/todo';
import { TodoEntity } from '../entities';
import { GetTodosDto } from '../dto/todo/get-todos.dto';
import { TodosAndTotalCount } from '../types/todos.type';
import { RequestWithUser } from '../types/request.type';

export class TodoController {
  constructor(private todoService: TodoService) {}

  async index(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const data: GetTodosDto = matchedData(req, {
        locations: ['query']
      }) as GetTodosDto;

      const todos: TodosAndTotalCount = await this.todoService.index(data);

      res.send(todos);
    } catch (e) {
      next(e);
    }
  }

  async store(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user: userData } = req as RequestWithUser;
      const data: CreateTodoDto = matchedData(req, { locations: ['body'] }) as CreateTodoDto;

      const { user, ...createdTodo }: TodoEntity = await this.todoService.store(userData!, data);

      res.status(201).send(createdTodo);
    } catch (e) {
      next(e);
    }
  }

  async show(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = Number(req.params.id);

      const todoEntity: TodoEntity | null = await this.todoService.show(id);

      res.send(todoEntity);
    } catch (e) {
      next(e);
    }
  }

  async update(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const updateData: UpdateTodoDto = matchedData(req, {
        locations: ['body']
      }) as UpdateTodoDto;

      const id: number = Number(req.params.id);

      await this.todoService.update(id, updateData);

      res.send('Todo successfully updated');
    } catch (e) {
      next(e);
    }
  }

  async destroy(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const id: number = Number(req.params.id);

      await this.todoService.destroy(id);

      res.send('Todo successfully deleted');
    } catch (e) {
      next(e);
    }
  }
}

const todoController = new TodoController(new TodoService());
export default todoController;

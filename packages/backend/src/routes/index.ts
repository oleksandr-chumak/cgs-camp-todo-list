import { Application } from 'express';
import todosRouter from './api/todos.route';
import userRouter from './api/user.route';
import authRouter from './api/auth.route';

class AppRouter {
  constructor(private app: Application) {}

  init() {
    this.app.use('/api/todos', todosRouter);
    this.app.use('/api/user', userRouter);
    this.app.use('/api/auth', authRouter);
  }
}

export default AppRouter;

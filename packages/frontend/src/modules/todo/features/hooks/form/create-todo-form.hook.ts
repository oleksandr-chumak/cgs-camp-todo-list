import { useFormik } from 'formik';
import { useCreateTodo } from '../query/create-todo.hook';
import { ICreateTodo } from '../../types/todo-service.type';
import { todoSchema } from '../../schemas/todo.schema';

export const useCreateTodoForm = () => {
  const { createTodo } = useCreateTodo();
  const handleSubmit = (value: ICreateTodo) => {
    createTodo(value);
  };

  const formik = useFormik<ICreateTodo>({
    initialValues: {
      title: '',
      content: ''
    },
    validationSchema: todoSchema,
    onSubmit: handleSubmit
  });

  const getFieldProperties = (name: keyof ICreateTodo) => ({
    id: name,
    name,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values[name]
  });

  const isError = (name: keyof ICreateTodo) => formik.touched[name] && formik.errors[name];

  return { getFieldProperties, handleSubmit: formik.handleSubmit, isError, errors: formik.errors };
};

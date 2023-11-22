import { useEffect } from 'react';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useGetTodo } from '../query/get-todo.hook';
import { ACCESS, STATUS, TodoWithoutUser } from '../../types/todos.type';
import { useUpdateTodo } from '../query/update-todo.hook';
import { useModalContext } from '../../../../common/hooks/modal-context.hook';
import { todoSchema } from '../../schemas/todo.schema';

export const useEditTodoForm = (id: number) => {
  const { data, isLoading } = useGetTodo(id);
  const { closeModal } = useModalContext();

  const onSuccess = () => {
    toast.success('Todo updated');
    closeModal();
  };

  const { updateTodo } = useUpdateTodo({ onSuccess });

  const handleSubmit = (values: TodoWithoutUser) => {
    updateTodo({ ...values, id });
  };

  const formik = useFormik<TodoWithoutUser>({
    initialValues: { title: '', content: '', access: ACCESS.PUBLIC, status: STATUS.IN_PROGRESS },
    validationSchema: todoSchema,
    onSubmit: handleSubmit
  });

  useEffect(() => {
    if (data) {
      formik.setValues({
        title: data.title,
        status: data.status,
        access: data.access,
        content: data.content
      });
    }
  }, [data]);

  const getFieldProperties = (name: keyof TodoWithoutUser) => ({
    id: name,
    name,
    onChange: formik.handleChange,
    onBlur: formik.handleBlur,
    value: formik.values[name]
  });

  const statusProperties = () => ({
    value: formik.values.status === STATUS.COMPLETED,
    onChange: (value: boolean) => {
      formik.setFieldValue('status', value ? STATUS.COMPLETED : STATUS.IN_PROGRESS);
    }
  });

  const accessProperties = () => ({
    value: formik.values.access === ACCESS.PRIVATE,
    onChange: (value: boolean) => {
      formik.setFieldValue('access', value ? ACCESS.PRIVATE : ACCESS.PUBLIC);
    }
  });

  const isError = (name: keyof TodoWithoutUser) => formik.touched[name] && formik.errors[name];

  return {
    isLoading,
    formik,
    isError,
    getFieldProperties,
    statusProperties,
    accessProperties
  };
};

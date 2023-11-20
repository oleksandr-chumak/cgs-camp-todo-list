import React from 'react';
import { useCreateTodoForm } from '../../../features/hooks/form/create-todo-form.hook';
import * as Styled from './create-todo-form.styled';
import { Input } from '../../../../common/components/UI/Field/input';
import { TextArea } from '../../../../common/components/UI/Field/text-area';
import { Button } from '../../../../common/components/UI/Button/button.styled';

const CreateTodoForm = () => {
  const { getFieldProperties, handleSubmit, isError, errors } = useCreateTodoForm();

  return (
    <Styled.StyledCreateForm onSubmit={handleSubmit}>
      <h1>Create Todo</h1>
      <Input
        placeholder="Title"
        type="text"
        {...getFieldProperties('title')}
        error={isError('title') ? errors.title : undefined}
      />
      <TextArea
        placeholder="Content"
        {...getFieldProperties('content')}
        error={isError('content') ? errors.content : undefined}
      />
      <Button type="submit">Create Todo</Button>
    </Styled.StyledCreateForm>
  );
};

export default CreateTodoForm;

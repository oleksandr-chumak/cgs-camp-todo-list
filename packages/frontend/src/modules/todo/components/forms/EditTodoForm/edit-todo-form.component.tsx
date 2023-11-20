import React, { FC } from 'react';
import { ClockLoader } from 'react-spinners';
import { useEditTodoForm } from '../../../features/hooks/form/edit-todo-form.hook';
import { Input } from '../../../../common/components/UI/Field/input';
import { TextArea } from '../../../../common/components/UI/Field/text-area';
import { Toggle } from '../../../../common/components/UI/Toggle/toggle';
import * as Styled from './edit-todo-form.styled';
import TodoElementIndicators from '../../../features/components/TodoElement/todo-element-indicators.component';
import { Button } from '../../../../common/components/UI/Button/button.styled';

const EditTodoForm: FC<{ id: number }> = ({ id }) => {
  const { isLoading, formik, isError, getFieldProperties, accessProperties, statusProperties } =
    useEditTodoForm(id);

  if (isLoading) {
    return (
      <Styled.EditFormLoaderWrapper>
        <ClockLoader />
      </Styled.EditFormLoaderWrapper>
    );
  }

  return (
    <Styled.StyledEditForm onSubmit={formik.handleSubmit}>
      <h1>Edit Todo</h1>
      <Input
        placeholder="Title"
        {...getFieldProperties('title')}
        error={isError('title') ? formik.errors.title : undefined}
      />
      <TextArea
        placeholder="Content"
        {...getFieldProperties('content')}
        error={isError('content') ? formik.errors.content : undefined}
      />
      <Styled.EditFromActions>
        <TodoElementIndicators status={formik.values.status} access={formik.values.access} />
        <Styled.TogglesWrapper>
          <Toggle {...accessProperties()} />
          <Toggle {...statusProperties()} />
        </Styled.TogglesWrapper>
      </Styled.EditFromActions>
      <Button type="submit">Edit Todo</Button>
    </Styled.StyledEditForm>
  );
};

export default EditTodoForm;

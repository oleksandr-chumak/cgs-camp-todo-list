import React, { FC } from 'react';
import { TodoElementIndicatorsProps } from '../../types/todos.type';
import * as Styled from './todo-element.styled';
import {
  ACCESS_ICON,
  ACCESS_ICON_COLOR,
  ACCESS_ICON_TEXT,
  STATUS_ICON,
  STATUS_ICON_COLOR,
  STATUS_ICON_TEXT
} from '../../const/icons.const';

const TodoElementIndicators: FC<TodoElementIndicatorsProps> = ({ status, access }) => {
  const StatusParam = {
    Icon: STATUS_ICON[status],
    color: STATUS_ICON_COLOR[status],
    text: STATUS_ICON_TEXT[status]
  };

  const AccessParam = {
    Icon: ACCESS_ICON[access],
    color: ACCESS_ICON_COLOR[access],
    text: ACCESS_ICON_TEXT[access]
  };

  return (
    <Styled.TodoElementIndicatorsWrapper>
      <Styled.TodoElementIndicator color={AccessParam.color}>
        <AccessParam.Icon size={20} />
        <Styled.TodoElementIndicatorText>{AccessParam.text}</Styled.TodoElementIndicatorText>
      </Styled.TodoElementIndicator>
      <Styled.TodoElementIndicator color={StatusParam.color}>
        <StatusParam.Icon size={20} />
        <Styled.TodoElementIndicatorText>{StatusParam.text}</Styled.TodoElementIndicatorText>
      </Styled.TodoElementIndicator>
    </Styled.TodoElementIndicatorsWrapper>
  );
};

export default TodoElementIndicators;

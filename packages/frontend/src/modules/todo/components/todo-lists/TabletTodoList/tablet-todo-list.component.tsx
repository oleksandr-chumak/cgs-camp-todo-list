import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { TodoListProps } from '../../../features/types/todos.type';
import TodoElement from '../../../features/components/TodoElement/todo-element.component';
import * as Styled from './tablet-todo-list.styled';

const TabletTodoList: FC<TodoListProps> = ({ todos }) => (
  <Styled.SwiperWrapper>
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      {todos.map((todo) => (
        <SwiperSlide key={`${todo.id}-todo-el`}>
          <TodoElement {...todo} formattedDate={todo.formattedDate} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Styled.SwiperWrapper>
);

export default TabletTodoList;

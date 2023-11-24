import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { SyncLoader } from 'react-spinners';
import { TodoListProps } from '../../../features/types/todos.type';
import TodoElement from '../../../features/components/TodoElement/todo-element.component';
import * as Styled from './tablet-todo-list.styled';
import { useTableTodoPagination } from '../../../features/hooks/table-todo-pagination.hook';

const TabletTodoList: FC<TodoListProps> = ({ todos, currentPage, totalCount, isLoading }) => {
  const { handleNextPage, getInitialIndex } = useTableTodoPagination({
    currentPage,
    todos,
    totalCount
  });

  const swiperItems = todos.map((todo) => (
    <SwiperSlide key={`${todo.id * Math.random()}-todo-el`}>
      <TodoElement {...todo} formattedDate={todo.formattedDate} />
    </SwiperSlide>
  ));

  return (
    <Styled.SwiperWrapper $loading={isLoading}>
      {!isLoading ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          modules={[Pagination]}
          scrollbar={{ draggable: true }}
          initialSlide={getInitialIndex()}
          onSlideChange={handleNextPage}
        >
          {swiperItems}
        </Swiper>
      ) : (
        <SyncLoader />
      )}
    </Styled.SwiperWrapper>
  );
};

export default TabletTodoList;

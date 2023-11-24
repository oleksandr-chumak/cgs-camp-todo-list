import { useQueryClient } from 'react-query';
import { useEffect, useRef } from 'react';
import { SwiperClass } from 'swiper/swiper-react';
import { useSearchQueryNavigation } from '../../../common/hooks/search-query-navigation.hook';
import { QUERY_KEYS, TODOS_LIMIT } from '../../../common/consts/app-keys.const';
import { wait } from '../../../common/utils/wait';
import {
  FIRST_PAGE_END,
  FIRST_PAGE_START,
  SECOND_PAGE_END,
  SECOND_PAGE_START,
  THIRD_PAGE_START
} from '../const/todo-pagination.const';
import { TableTodoPagination } from '../types/todo-pagination.type';

export const useTableTodoPagination = ({ currentPage, todos, totalCount }: TableTodoPagination) => {
  const { navigate } = useSearchQueryNavigation();
  const queryClient = useQueryClient();
  const sliderOptions = useRef({
    initialIndex: currentPage === 1 ? FIRST_PAGE_START : SECOND_PAGE_START,
    prevIndex: undefined,
    isTodosRefetched: false,
    isInit: false,
    currentIndex: undefined
  });

  const getInitialIndex = () => {
    if (!sliderOptions.current.isTodosRefetched && sliderOptions.current.prevIndex) {
      return sliderOptions.current.currentIndex! > todos.length - 1
        ? todos.length - 1
        : sliderOptions.current.currentIndex!;
    }
    return sliderOptions.current.initialIndex;
  };

  const refetchTodos = async () => {
    const lastPage = Math.ceil(totalCount / TODOS_LIMIT);
    if (currentPage === 1 || currentPage === lastPage) {
      return;
    }
    sliderOptions.current.initialIndex =
      sliderOptions.current.currentIndex === 0 ? SECOND_PAGE_START : SECOND_PAGE_END;
    await wait(700);
    queryClient.refetchQueries(QUERY_KEYS.TODOS);
    sliderOptions.current.isTodosRefetched = true;
  };

  useEffect(() => {
    sliderOptions.current.isInit = true;
  }, []);

  useEffect(() => {
    sliderOptions.current.isTodosRefetched = false;
  }, [todos]);

  const handleNextPage = async (swiper: SwiperClass) => {
    sliderOptions.current.currentIndex = swiper.activeIndex;
    if (!sliderOptions.current.isInit) {
      return;
    }

    const previousIndex: number =
      sliderOptions.current.prevIndex || sliderOptions.current.initialIndex;

    const currenSwiperIndex: number = swiper.activeIndex;

    if (currenSwiperIndex === 0 || currenSwiperIndex === todos.length - 1) {
      refetchTodos();
    }

    const isReducePage =
      (currenSwiperIndex === FIRST_PAGE_END && previousIndex === SECOND_PAGE_START) ||
      (currenSwiperIndex === SECOND_PAGE_END && previousIndex === THIRD_PAGE_START);
    const isIncreasePage =
      (currenSwiperIndex === SECOND_PAGE_START && previousIndex === FIRST_PAGE_END) ||
      (currenSwiperIndex === THIRD_PAGE_START && previousIndex === SECOND_PAGE_END);

    if (isReducePage) {
      navigate({ page: `${currentPage - 1}` });
    }

    if (isIncreasePage) {
      navigate({ page: `${currentPage + 1}` });
    }

    sliderOptions.current.prevIndex = swiper.activeIndex;
  };

  return { handleNextPage, getInitialIndex };
};

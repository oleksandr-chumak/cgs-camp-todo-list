import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { MainRouter } from '../navigation';

import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';
import { ModalContextProvider } from '../common/context/modal/modal.context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      cacheTime: Infinity
    }
  }
});

const AppContainer = () => (
  <ThemeProvider theme={theme}>
    <Styled.GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <ModalContextProvider>
        <Toaster position="bottom-center" />
        <MainRouter />
      </ModalContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;

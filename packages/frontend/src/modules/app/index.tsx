import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { Toaster } from 'react-hot-toast';
import { MainRouter } from '../navigation';
import * as theme from '../theme';
import * as Styled from './app.styled';
import '../../style.css';
import { ModalContextProvider } from '../common/context/modal/modal.context';
import { UserProvider } from '../auth/components/UserProvider/user-provider.component';

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
      <UserProvider>
        <ModalContextProvider>
          <Toaster position="bottom-center" />
          <MainRouter />
        </ModalContextProvider>
      </UserProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default AppContainer;

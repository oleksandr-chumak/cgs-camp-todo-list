import { useContext } from 'react';
import { ModalContext } from '../context/modal/modal.context';
import { ModalContextProps } from '../types/context/modal-context.type';

export const useModalContext = (): ModalContextProps => {
  const context: ModalContextProps | null = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within a ModalContextProvider');
  }

  return context;
};

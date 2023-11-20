import React, { createContext, FC, useCallback, useMemo, useState } from 'react';
import Modal from 'react-modal';
import { Children } from '../../types/props';
import { ModalContextProps } from '../../types/context/modal-context.type';
import * as Styled from './modal-context.styled';

export const ModalContext = createContext<ModalContextProps | null>(null);

export const ModalContextProvider: FC<Children> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<React.JSX.Element | null>(null);

  const openModal = useCallback((content: React.JSX.Element) => {
    setModalContent(content);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const contextValue = useMemo(() => ({ closeModal, openModal }), [closeModal, openModal]);

  const createContentElement = (
    props: React.ComponentPropsWithRef<'div'>,
    modalChildren: React.ReactNode
  ) => <Styled.ModalWindow {...props}>{modalChildren}</Styled.ModalWindow>;

  const createOverlayElement = (
    props: React.ComponentPropsWithRef<'div'>,
    overlayChildren: React.ReactNode
  ) => <Styled.Overlay {...props}>{overlayChildren}</Styled.Overlay>;

  return (
    <ModalContext.Provider value={contextValue}>
      <>
        <Modal
          isOpen={isModalOpen}
          contentElement={createContentElement}
          overlayElement={createOverlayElement}
        >
          <Styled.CloseIcon onClick={closeModal} />
          {modalContent}
        </Modal>
        {children}
      </>
    </ModalContext.Provider>
  );
};

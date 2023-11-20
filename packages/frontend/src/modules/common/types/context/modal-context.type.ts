import React from 'react';

export interface ModalContextProps {
  openModal: (content: React.JSX.Element) => void;
  closeModal: () => void;
}

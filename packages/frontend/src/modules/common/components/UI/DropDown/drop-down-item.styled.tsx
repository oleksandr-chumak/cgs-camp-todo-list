import React, { FC } from 'react';
import { IconType } from 'react-icons';
import { DropDownItemProps } from '../../../types/props/UI/drop-down.type';
import * as Styled from './drop-down.styled';

const DropDownItem: FC<DropDownItemProps> = ({ icon, text, onClick }) => {
  const Icon: IconType | undefined = icon;
  return (
    <Styled.DropDownItemWrapper onClick={onClick}>
      {Icon ? <Icon /> : null}
      {text}
    </Styled.DropDownItemWrapper>
  );
};

export default DropDownItem;

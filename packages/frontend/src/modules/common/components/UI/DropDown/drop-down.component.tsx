import React, { FC, useState } from 'react';
import * as Styled from './drop-down.styled';
import { DropDownProps } from '../../../types/props/UI/drop-down.type';
import DropDownItem from './drop-down-item.styled';

const DropDown: FC<DropDownProps> = ({ items, title }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleItemClick = (onClick: () => void) => {
    setIsOpen(false);
    onClick();
  };

  return (
    <Styled.DropDownWrapper>
      <Styled.DropDownOpen onClick={handleClick}>{title}</Styled.DropDownOpen>
      <Styled.DropDownList $active={isOpen}>
        {items.map(({ onClick, ...props }, index) => (
          <DropDownItem
            key={`${index}-${title}-drop-down-item`}
            {...props}
            onClick={() => {
              handleItemClick(onClick);
            }}
          />
        ))}
      </Styled.DropDownList>
    </Styled.DropDownWrapper>
  );
};

export default DropDown;

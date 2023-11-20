import React, { FC, useEffect, useState } from 'react';
import { ToggleProps } from '../../../types/props/UI/toggle.type';
import * as Styled from './toggle.styled';

export const Toggle: FC<ToggleProps> = React.memo(
  ({ value, onClick, initialState = false, onChange }) => {
    const [isActive, setIsActive] = useState<boolean>(initialState);

    useEffect(() => {
      if (value !== undefined) {
        setIsActive(value);
      }
    }, [value]);

    const handleClick = (): void => {
      setIsActive((prevState) => {
        if (onChange) {
          onChange(!prevState);
        }
        return !prevState;
      });
    };

    const Indicator = isActive ? Styled.ActiveIndicator : Styled.Indicator;

    return (
      <Styled.ToggleWrapper
        $active={isActive}
        onClick={onClick ? () => onClick(isActive, handleClick) : handleClick}
      >
        <Indicator />
      </Styled.ToggleWrapper>
    );
  }
);

import { IconType } from 'react-icons';

export interface DropDownItemProps {
  text: string;
  onClick: () => void;
  icon?: IconType;
}

export interface DropDownListActiveProps {
  $active: boolean;
}

export interface DropDownProps {
  items: DropDownItemProps[];
  title: string;
}

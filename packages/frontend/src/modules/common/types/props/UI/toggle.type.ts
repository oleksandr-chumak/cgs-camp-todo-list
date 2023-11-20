export interface ToggleProps {
  initialState?: boolean;
  onClick?: (isActive: boolean, handleClick: () => void) => void;
  onChange?: (isActive: boolean) => void;
  value?: boolean;
}

export interface ToggleActiveProps {
  $active: boolean;
}

import { TbProgressCheck } from 'react-icons/tb';
import { IoLockClosedOutline, IoLockOpenOutline } from 'react-icons/io5';
import { IconType } from 'react-icons';
import { FaRegCircleCheck } from 'react-icons/fa6';
import { ACCESS, STATUS } from '../types/todos.type';
import { COLORS } from '../../../theme';

export const STATUS_ICON: Record<STATUS, IconType> = {
  [STATUS.IN_PROGRESS]: TbProgressCheck,
  [STATUS.COMPLETED]: FaRegCircleCheck
};

export const ACCESS_ICON: Record<ACCESS, IconType> = {
  [ACCESS.PUBLIC]: IoLockOpenOutline,
  [ACCESS.PRIVATE]: IoLockClosedOutline
};

export const STATUS_ICON_COLOR: Record<STATUS, string> = {
  [STATUS.IN_PROGRESS]: '#4f46e5',
  [STATUS.COMPLETED]: '#43B143'
};

export const ACCESS_ICON_COLOR: Record<ACCESS, string> = {
  [ACCESS.PUBLIC]: '#0389BF',
  [ACCESS.PRIVATE]: COLORS.red
};

export const ACCESS_ICON_TEXT: Record<ACCESS, string> = {
  [ACCESS.PUBLIC]: 'Public',
  [ACCESS.PRIVATE]: 'Private'
};

export const STATUS_ICON_TEXT: Record<STATUS, string> = {
  [STATUS.IN_PROGRESS]: 'In Progress',
  [STATUS.COMPLETED]: 'Completed'
};

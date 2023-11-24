interface BasePaginationProps {
  onClick: () => void;
  currentPage: number;
}
export interface PaginationActionForwardProps extends BasePaginationProps {
  limit: number;
  totalCount: number;
}
export interface PaginationActionBackProps extends BasePaginationProps {}

export type PaginationItemProps = Omit<BasePaginationProps, 'onClick'> & {
  onClick: (page: number) => void;
  page: number;
};

export interface ButtonPaginationProps {
  currentPage: number;
  totalCount: number;
  limit: number;
  onItemClick: (page: number) => void;
  onNextForwardClick: () => void;
  onBackActionClick: () => void;
}

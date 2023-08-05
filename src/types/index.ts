export interface Props<T> {
  data: T[];
  sort?: boolean;
  dataLimit?: number;
  showPagination?: boolean;
  CustomTdComponent?: React.FC<{id: number | string, data: T}>;
}

export interface IHeader {
  Header: string;
  accessor: string;
}
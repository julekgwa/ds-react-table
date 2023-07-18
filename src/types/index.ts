export interface Props<T> {
  data: T[];
  sort?: boolean;
  dataLimit?: number;
  showPagination?: boolean;
  showEdit?: false;
  showRemove?: false;
  deleteComponent?: React.ReactNode;
  editComponent?: React.ReactNode;
  onRemove?: (id: string | number, data: T) => void;
  onEdit?: (id: string | number, data: T) => void;
}

export interface IHeader {
  Header: string;
  accessor: string;
}
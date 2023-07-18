import React from 'react'
import Pagination from 'rc-pagination';
import { Table } from '../../components/Table';

interface Props<T> {
  data: T[];
  sort?: boolean;
  dataLimit?: number;
  showPagination?: boolean;
}

export function BYOPTable<T>({data}: Props<T>) {

  const countPerPage = 2;
  const [currentPage, setCurrentPage] = React.useState(1);
  const [collection, setCollection] = React.useState(data.slice(0, countPerPage));

  const updatePage = (p: number) => {

    setCurrentPage(p);
    const to = countPerPage * p;
    const from = to - countPerPage;
    setCollection(data.slice(from, to));

  };

  return (
    <>
      <Table dataLimit={collection.length} data={collection} />

      <Pagination
        pageSize={countPerPage}
        onChange={updatePage}
        current={currentPage}
        total={data.length}
      />
    </>
  );

}

import PropTypes from 'prop-types';

import React, {
  useEffect,
  useState
} from 'react';

import './table.module.css';

import {
  addUniqueKey,
  compare,
  createHeaders
} from './utils';

export function Table({ data, sort, dataLimit, showPagination, }) {

  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [currentSort, setCurrentSort] = useState('');
  const [sortDir, setSortDir] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(dataLimit);
  const [nextButtonText, setNextButtonText] = useState('NEXT');

  const sortTable = (sortBy) => {

    if (!sort) {

      return;

    }
    const sortDirection =
      sortBy !== currentSort ? 'asc' : sortDir === 'asc' ? 'desc' : 'asc';
    const tempData = [...tableData];
    tempData.sort((a, b) => compare(a, b, sortBy, sortDirection));
    setSortDir(sortDirection);
    setCurrentSort(sortBy);
    setTableData(addUniqueKey(tempData));

  };

  const nextPage = (e) => {

    e.preventDefault();

    if (currentPage === totalPages) {

      return;

    }
    const nextPageNumber =
      currentPage < totalPages ? currentPage + 1 : currentPage;
    const nextStartIndex = startIndex + dataLimit;
    const nextEndIndex = nextPageNumber * dataLimit;

    const newTableData = data.slice(nextStartIndex, nextEndIndex);
    if (currentSort) {

      newTableData.sort((a, b) => compare(a, b, currentSort, sortDir));

    }
    setNextButtonText(nextPageNumber === totalPages ? 'PREV' : 'NEXT');
    setTableData(addUniqueKey(newTableData));
    setCurrentPage(nextPageNumber);
    setStartIndex(nextStartIndex);
    setEndIndex(nextEndIndex);

  };

  const prevPage = (e) => {

    e.preventDefault();
    if (currentPage <= 1) {

      return;

    }
    const nextPageNumber = currentPage - 1;
    const nextStartIndex = startIndex - dataLimit;
    const nextEndIndex = nextPageNumber * dataLimit;
    const newTableData = data.slice(nextStartIndex, nextEndIndex);
    if (currentSort) {

      newTableData.sort((a, b) => compare(a, b, currentSort, sortDir));

    }
    setNextButtonText(nextPageNumber === 1 ? 'NEXT' : 'PREV');
    setTableData(addUniqueKey(newTableData));
    setCurrentPage(nextPageNumber);
    setStartIndex(nextStartIndex);
    setEndIndex(nextEndIndex);

  };

  const nextButton = (e) => {

    if (nextButtonText === 'NEXT') {

      nextPage(e);

    } else {

      prevPage(e);

    }

  }

  useEffect(() => {

    setTableData(addUniqueKey(data.slice(startIndex, endIndex)));
    setTableHeaders(createHeaders(data));
    setTotalPages(Math.ceil(data.length / dataLimit));

  }, [data]);

  return (
    <div>
      <table className='table-sortable'>
        <thead>
          <tr>
            {tableHeaders.map((header, idx) => (
              <th
                data-sort-dir={`${
                  header.accessor === currentSort ? sortDir : ''
                }`}
                className={`${
                  header.accessor === currentSort ? 'currently-sorted' : ''
                }`}
                onClick={() => sortTable(header.accessor)}
                key={idx}
              >
                {header.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, idx) => (
            <tr key={row.key}>
              {tableHeaders.map((h, i) => (
                <td key={row.key + i}>{tableData[idx][h.accessor]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      { (showPagination && totalPages !== 1) && (
        <div className='ds-pagination pagination'>
          <a onClick={prevPage} href='#'>
            &laquo;
          </a>
          <a onClick={nextButton} href='#'>{nextButtonText}</a>
          <a onClick={(e) => e.preventDefault()} href=''>
            {currentPage}
          </a>
          <a onClick={(e) => e.preventDefault()} href=''>
            /
          </a>
          <a onClick={(e) => e.preventDefault()} href=''>
            {totalPages}
          </a>
          <a onClick={nextPage} href='#'>
            &raquo;
          </a>
        </div>
      )}
    </div>
  );

}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  sort: PropTypes.bool,
  dataLimit: PropTypes.number,
  showPagination: PropTypes.bool,
};

Table.defaultProps = {
  data: [],
  sort: false,
  dataLimit: 10,
  showPagination: false,
};

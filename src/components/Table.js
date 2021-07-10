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

export function Table({ data, sort , pageLimit , }) {

  const [tableHeaders, setTableHeaders] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [currentSort, setCurrentSort] = useState('');
  const [sortDir, setSortDir] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const sortTable = (sortBy) => {

    if (!sort) {

      return;

    }
    const sortDirection = sortBy !== currentSort ? 'asc': sortDir === 'asc' ? 'desc' : 'asc';
    const tempData = [...data];
    tempData.sort((a, b) => compare(a, b, sortBy, sortDirection))
    setSortDir(sortDirection);
    setCurrentSort(sortBy);
    setTableData(addUniqueKey(tempData));

  }

  const nextPage = () => {

    if (currentPage < totalPages) {

      setCurrentPage(currentPage + 1);

    }

  }

  const prevPage = () => {

    if (currentPage > 1) {

      setCurrentPage(currentPage - 1);

    }

  }

  useEffect(() => {

    setTableData(addUniqueKey(data));
    setTableHeaders(createHeaders(data));
    setTotalPages(Math.ceil(data.length / pageLimit));

  }, [data])

  return (<div><table className='table-sortable'>
    <thead>
      <tr>
        {tableHeaders.map((header, idx) => (
          <th data-sort-dir={`${header.accessor === currentSort ? sortDir : ''}`} className={`${header.accessor === currentSort ? 'currently-sorted' : ''}`} onClick={() => sortTable(header.accessor)} key={idx}>{header.Header}</th>
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
  <div>
    <p><span onClick={prevPage}>&#60; </span><span>{` ${currentPage}/${totalPages} `}</span><span onClick={nextPage}> &#62;</span></p>
  </div>
  </div>);

}

Table.propTypes = {
  data: PropTypes.array.isRequired,
  sort: PropTypes.bool,
  pageLimit: PropTypes.number,
};

Table.defaultProps = {
  data: [],
  sort: false,
  pageLimit: 2,
};
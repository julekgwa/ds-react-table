import {
  storiesOf
} from '@storybook/react';

import Pagination from 'rc-pagination';

import React, {
  useState
} from 'react';

import 'rc-pagination/assets/index.css';

import {
  Table
} from '../../index';

// import './byop.module.css';

const stories = storiesOf('BYOP', module);

const data = [
  {
    qualification: 'Software Engineering',
    school: 'UJ',
    period: '04/2016 – 08/2018',
    location: 'JOHANNESBURG, SOUTH AFRICA',
  },
  {
    qualification: 'PC Technician',
    school: 'Boston City Campus & business College',
    period: '01/2011 – 11/2011',
    location: 'RANDBURG, SOUTH AFRICA',
  },
  {
    qualification: 'UX Designer',
    school: 'UCT',
    period: '01/2008 – 12/2010',
    location: 'CAPE TOWN, SOUTH AFRICA',
  }
];

stories.add('BYOP', () => {

  const countPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState(data.slice(0, countPerPage));

  const updatePage = (p) => {

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

});

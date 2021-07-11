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

import './byop.module.css';

const stories = storiesOf('BYOP', module);

const data = [
  {
    language: 'JavaScript',
    level: '5',
  },
  {
    language: 'NodeJS',
    level: '3',
  },
  {
    language: 'React',
    level: '5',
  },
  {
    language: 'React Native',
    level: '5',
  },
  {
    language: 'Vue',
    level: '3',
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

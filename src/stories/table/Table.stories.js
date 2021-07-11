import {
  storiesOf
} from '@storybook/react';

import React from 'react';

import {
  Table
} from '../../index';

import './table-st.module.css';

const stories = storiesOf('Table', module);

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

stories.add('Table', () => {

  return (
    <Table
      dataLimit={15}
      sort={false}
      showPagination={true}
      data={data}
    />
  );

});

import {
  storiesOf
} from '@storybook/react';

import React from 'react';

import {
  Table
} from '../index';

const stories = storiesOf('Table', module);

const programming = [
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
  }
];

stories.add('Table', () => {

  return <Table sort={true} data={programming} />

});
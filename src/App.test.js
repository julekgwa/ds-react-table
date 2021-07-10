import {
  render
} from '@testing-library/react';

import React from 'react';

import {
  Table
} from './index';

// eslint-disable-next-line no-undef
test('should render without crashing', () => {

  // eslint-disable-next-line no-unused-vars
  const { getByText, } = render(<Table data={[{ 
    name: 'Jay',
    skill: 'Software Engineering' 
    ,
  }]} />);

});
import {
  Meta,
  StoryObj,
  storiesOf
} from '@storybook/react';

import 'rc-pagination/assets/index.css';

import { BYOPTable } from './BYOPTable';

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

const meta = {
  title: 'BYOP',
  component: BYOPTable,
} satisfies Meta<typeof BYOPTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    data: data
  }
}

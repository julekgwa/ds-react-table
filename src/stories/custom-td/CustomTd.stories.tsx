import React from 'react';
import {MdDeleteOutline, MdEdit} from 'react-icons/md'
import { Table as TB } from '../../components/Table';
import { Meta, StoryObj } from '@storybook/react';

import './custom.module.css'

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
  title: 'With custom td',
  component: TB,
} satisfies Meta<typeof TB>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Table: Story = {
  args: {
    data: data,
    customTdHeader: 'Actions',
    CustomTdComponent: () => <div style={{ padding: '0 30px'}}>
      <MdEdit />
      <MdDeleteOutline />
    </div>
  }
}
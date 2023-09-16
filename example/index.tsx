import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Parser, Table } from '../src';

import mockData from './utils/mockData';
import './styles/style.css';

const tableData = {
  id: '8K1iH232qHH57',
  type: 'table',
  data: {
    withHeadings: true,
    content: [
      ['dawdaw', '<code class="inline-code"><i>header1</i></code>', 'jjjj'],
      ['dawd', 'awd', ''],
      ['awd', '123', '']
    ]
  }
};

const App = () => {
  return (
    <div className="wrapper">
      {/* @ts-ignore */}
      <Parser data={mockData} />
      <Table
        withHeadings={tableData.data.withHeadings}
        content={tableData.data.content}
        style={{ color: 'red' }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

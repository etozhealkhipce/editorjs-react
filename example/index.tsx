import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Parser, Table } from '../.';
import mockData from './utils/mockData';
import './styles/style.css';

const App = () => {
  return (
    <>
      <Parser data={mockData} />
      <Table content={mockData} withHeadings={false} />;
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

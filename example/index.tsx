import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Parser } from '../.';
import mockData from './utils/mockData';
import './styles/style.css';

const App = () => {
  return (
    <div className="wrapper">
      <Parser data={mockData} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

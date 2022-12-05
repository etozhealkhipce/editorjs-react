import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
<<<<<<< Updated upstream
// import { Parser } from '../.';
import { Parser, Table } from '@alkhipce/editorjs-react';

=======
<<<<<<< Updated upstream
import { Parser } from '../.';
=======
// import { Parser } from '../.';
import { Parser } from '@alkhipce/editorjs-react';

>>>>>>> Stashed changes
>>>>>>> Stashed changes
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

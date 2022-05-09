import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Parser } from '../.';

const App = () => {
  return (
    <div>
      <Parser
        data={{
          time: 1652089479683,
          blocks: [
            {
              id: 'CMci-PoqbJ',
              type: 'header',
              data: {
                text: 'Editor.js',
                level: 2,
              },
            },
          ],
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

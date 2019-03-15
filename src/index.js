import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './styles.css';
import Root from './Root';

ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('app')
);

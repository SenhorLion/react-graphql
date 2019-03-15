import React from 'react';
import { render } from 'react-testing-library';

import App from '../App';
import Root from '../Root';

describe('App test', () => {
  it('App renders', () => {
    render(
      <Root>
        <App />
      </Root>
    );
  });
});

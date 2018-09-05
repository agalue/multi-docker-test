import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

it('renders without crashing', () => {
  var mock = new MockAdapter(axios);
  mock.onGet('/api/values/current').reply(200, { '5': '8' });
  mock.onGet('/api/values/all').reply(200, [{ 'number': '5' }]);

  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

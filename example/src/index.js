import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import User from './User';
import { store, Provider } from './redux-saga-async';

// const serviceDomain = 'https://api.github.com';

// const address = {
//   users: `${serviceDomain}/users`,
// }


ReactDOM.render(
  <Provider store={store}>
    <User />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();

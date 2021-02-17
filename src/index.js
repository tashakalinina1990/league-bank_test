import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {fetchChosenExchangeRates} from './store/api-actions';
import {createAPI} from './services/api';
import rootReducer from './store/rootReducer';
import App from './components/app';
import './sass/style.scss';

const api = createAPI();

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument(api)),
);

Promise.all([
  store.dispatch(fetchChosenExchangeRates(new Date())),
])
.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
})
// .catch(() => swal(`Something went wrong.`));

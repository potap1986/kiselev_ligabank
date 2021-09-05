import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createApi} from './api';
import {Provider} from 'react-redux';
import reducer from './store/reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import './index.css';
import App from './components/app/app.jsx';
import reportWebVitals from './reportWebVitals';
import {ApiActionCreator} from './store/api-actions';

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(createApi())))
);

store.dispatch(ApiActionCreator.fetchRates(store.getState().date));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import App from './components/app/app';

import reducer from './store/reducers/reducer';
import {createAPI} from './services/api';
import {setAuthorizationStatus} from './store/action';
import {fetchOfferList} from './store/api-actions';
import {AuthorizationStatus} from './constants';

const api = createAPI(
    () => store.dispatch(setAuthorizationStatus(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    reducer,
    applyMiddleware(thunk.withExtraArgument(api))
);

store.dispatch(fetchOfferList());

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById(`root`)
);

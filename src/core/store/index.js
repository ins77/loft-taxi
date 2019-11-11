import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../saga';
import { signUpMiddleware } from '../../App/store/signUp/middleware';
import { sendCardMiddleware } from '../../App/store/userCard/middleware';

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
    applyMiddleware(signUpMiddleware),
    applyMiddleware(sendCardMiddleware),
  ),
);

sagaMiddleware.run(rootSaga);

export default store;

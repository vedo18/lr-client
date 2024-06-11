import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import {createLogger} from 'redux-logger';
import rootSaga from '../saga';
import createRootReducer from '../reducer';

export default function configureStore(initialState) {
  const rootReducer = createRootReducer();

  const sagaMiddleware = createSagaMiddleware();

  const middleware = [sagaMiddleware];
  if (__DEV__) {
    middleware.push(createLogger());
  }

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);

  return {store};
}

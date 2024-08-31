import { compose, createStore, applyMiddleware, Middleware, StoreEnhancer } from 'redux';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';

import { rootSaga } from './root-saga';
import { rootReducer } from './root-reducer';

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares: Middleware<{}, any, any>[] = [];
if (process.env.NODE_ENV !== 'production') {
  middleWares.push(logger as Middleware<{}, any, any>);
}
middleWares.push(sagaMiddleware as SagaMiddleware<any>);

const composeEnhancer: typeof compose = 
  (process.env.NODE_ENV !== 'production' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers: StoreEnhancer = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

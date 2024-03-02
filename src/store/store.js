import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReduser = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV === '[production]' && logger].filter(Boolean);

const composeEnhancer = (process.env.NODE_ENV === '[production]' && window && window.__REDUX_DEVLTOOLS_EXPENSION_COMPOSE__)

const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReduser,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

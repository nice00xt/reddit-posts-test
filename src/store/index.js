import { createStore, applyMiddleware } from "redux";
import { createPromise } from 'redux-promise-middleware';
import { createLogger } from "redux-logger";
import rootReducer from "../reducers";

const loggerMiddleware = createLogger({ collapsed: true });
const middlewares = [createPromise(), loggerMiddleware];

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middlewares)
  );
}

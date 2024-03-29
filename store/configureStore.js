import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

let middleware = [];
if (process.env.NODE_ENV === "production") {
  middleware = [thunk];
} else {
  middleware = typeof window === "object" ? [thunk, logger] : [thunk];
}

const enhancer = composeEnhancers(applyMiddleware(...middleware));

const makeStore = () => createStore(rootReducer, enhancer);

export const wrapper = createWrapper(makeStore);

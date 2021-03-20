import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";
import ordersReducer from "./reducers/ordersReducer";
import languagesReducer from "./reducers/languagesReducer";

export const history = createBrowserHistory();

const reducers = combineReducers({
  ordersReducer,
  languagesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(reduxThunk))
);

export default store;

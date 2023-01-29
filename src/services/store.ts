import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import {socketMiddleware} from "./middleware/socket-middleware";
import {WEB_SOCKET_ALL_ORDERS, WEB_SOCKET_PROFILE_ORDERS} from "../utils/constants";
import {wsOrderFeedType} from "./actions/ws-order-feed";
import {wsProfileFeedType} from "./actions/ws-profile-feed";

const enhancer = composeWithDevTools(applyMiddleware(
  thunk,
  socketMiddleware(WEB_SOCKET_ALL_ORDERS, wsOrderFeedType),
  socketMiddleware(WEB_SOCKET_PROFILE_ORDERS, wsProfileFeedType)
));
export const state = createStore(rootReducer, enhancer)
import {composeWithDevTools} from "redux-devtools-extension";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import {rootReducer} from "./reducers";
import { socketOrderFeedMiddleware } from './middleware/socket-order-feed-middleware';
import { socketProfileFeedMiddleware } from './middleware/socket-profile-feed-middleware';

const enhancer = composeWithDevTools(applyMiddleware(thunk, socketOrderFeedMiddleware(), socketProfileFeedMiddleware()));
export const state = createStore(rootReducer, enhancer)
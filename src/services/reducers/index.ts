import {combineReducers} from "redux";
import {ingredients} from "./ingredients";
import {burgerConstructor} from "./burgerConstructor";
import {order} from "./order";
import {loginReducer, resetPasswordReducer, profileReducer} from "./auth";
import {orderFeedReducer} from "./ws-order-feed";
import {profileFeedReducer} from "./ws-profile-feed";
import {orderDetailsReducer} from "./order-details";

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  order,
  loginReducer,
  resetPasswordReducer,
  profileReducer,
  orderFeedReducer,
  profileFeedReducer,
  orderDetailsReducer
});

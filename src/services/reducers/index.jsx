import {combineReducers} from "redux";
import {ingredients} from "./ingredients";
import {burgerConstructor} from "./burgerConstructor";
import {order} from "./order";
import {loginReducer, newPasswordReducer, resetPasswordReducer, profileReducer} from "./auth";

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  order,
  loginReducer,
  resetPasswordReducer,
  newPasswordReducer,
  profileReducer,
})
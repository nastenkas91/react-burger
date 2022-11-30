import {combineReducers} from "redux";
import {ingredients} from "./ingredients";
import {burgerConstructor} from "./burgerConstructor";
import {order} from "./order";
import {loginReducer, newPasswordReducer, registrationReducer, resetPasswordReducer, profileReducer} from "./auth";

export const rootReducer = combineReducers({
  ingredients,
  burgerConstructor,
  order,
  registrationReducer,
  loginReducer,
  resetPasswordReducer,
  newPasswordReducer,
  profileReducer,
})
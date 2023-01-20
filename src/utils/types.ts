import * as H from 'history';
import {TLoginActions, TProfile, TResetPassword} from "../services/actions/auth";
import {TBurgerConstructorActions} from "../services/actions/burgerConstructor";
import {TIngredientsActions} from "../services/actions/ingredients";
import {TOrderActions} from "../services/actions/order";
import { ThunkAction } from 'redux-thunk';
import type {} from "redux-thunk/extend-redux"
import {state} from "../services/store";
import {TOrderFeedActions} from "../services/actions/ws-order-feed";
import {TProfileFeedActions} from "../services/actions/ws-profile-feed";

export type TIngredient = {
  _id: string,
  name: string,
  type: string,
  proteins: number,
  fat: number,
  carbohydrates: number,
  price:  number,
  calories: number,
  image:  string,
};

export type TModalState = {
  background?: H.Location
};

export type TLocation = {
  pathname: string,
  hash: string,
  key: string,
  from: string | undefined
}

export type TInputEvent = {
  target: HTMLInputElement
}

export type TDropIngredient = TIngredient & {dropId: string};

export type TCloseModal = {
  closeModal: () => void
}

export interface Counter {
  [index: string]: number;
}

export type TOrder = {
  ingredients: TIngredient[]
}

export type TUserInfo = {
  email: string,
  password: string,
  name: string
}

export type TFeedItem = {
  ingredients: Array<string | null>,
  _id: string,
  status: string,
  number: number,
  name: string
  createdAt: string,
  updatedAt: string
}

export type TWSData = {
  orders: TFeedItem[] | null;
  success: boolean,
  total: number;
  totalToday: number;
}

export type RootState = ReturnType<typeof state.getState>;

export type TApplicationActions =
  | TLoginActions
  | TResetPassword
  | TProfile
  | TBurgerConstructorActions
  | TIngredientsActions
  | TOrderActions
  | TOrderFeedActions
  | TProfileFeedActions;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

export type AppDispatch = typeof state.dispatch;



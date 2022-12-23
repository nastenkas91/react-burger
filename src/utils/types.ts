import * as H from 'history';

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

export type TOrder = {
  ingredients: TIngredient[]
}

export type TUserInfo = {
  email: string,
  password: string,
  name: string
}

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

export type TDropIngredient = TIngredient & {dropId: string};

export type TCloseModal = {
  closeModal: () => void
}

import {
  SET_REGISTRATION_FORM,
  SEND_REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_SUCCESS,
  REGISTRATION_REQUEST_FAILED,

  SET_LOGIN_FORM,
  SEND_LOGIN_REQUEST,
  LOGIN_REQUEST_SUCCESS,
  LOGIN_REQUEST_FAILED,

  SEND_LOGOUT_REQUEST,
  LOGOUT_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,

  SET_RESET_PASSWORD_FORM,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,

  SET_NEW_PASSWORD_FORM,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  NEW_PASSWORD_FAILED,

  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,

  SET_PROFILE_FORM,
  PROFILE_FORM_SUBMIT,
  PROFILE_SUBMIT_SUCCESS,
  PROFILE_SUBMIT_FAILED,

  TOKEN_REQUEST,
  TOKEN_REQUEST_SUCCESS,
  TOKEN_REQUEST_FAILED,
  ISetRegistrationForm,
  ISendRegistrationRequest,
  IRegistrationRequestSuccess,
  IRegistrationRequestFailed,
  ISetLoginForm,
  ISendLoginRequest,
  ILoginRequestSuccess,
  ILoginRequestFailed,
  ISendLogoutRequest,
  ILogoutSuccess,
  ILogoutFailed,
  ISetResetPasswordForm,
  ISendResetPasswordRequest,
  IResetPasswordSuccess,
  IResetPasswordFailed,
  ISetNewPasswordForm,
  INewPasswordRequest,
  INewPasswordSuccess,
  INewPasswordFailed,
  IGetUserProfileRequest,
  IGetUserProfileSuccess,
  IGetUserProfileFailed,
  ISetProfileInfoForm,
  IChangeProfileInfoRequest,
  IChangeProfileInfoSuccess,
  IChangeProfileInfoFailed,
  ISendTokenRequest,
  ITokenRequestSuccess, ITokenRequestFailed,
} from '../actions/auth';
import {TUserInfo} from "../../utils/types";

//Registration
export const setRegistrationForm = (field: string, value: string): ISetRegistrationForm => {
  return {
    type: SET_REGISTRATION_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendRegistrationRequest = (): ISendRegistrationRequest => {
  return {
    type: SEND_REGISTRATION_REQUEST,
  }
};

export const registrationRequestSuccess = (): IRegistrationRequestSuccess => {
  return {
    type: REGISTRATION_REQUEST_SUCCESS,
  }
};

export const registrationRequestFailed = (err?: string): IRegistrationRequestFailed => {
  return {
    type: REGISTRATION_REQUEST_FAILED,
    payload: err
  }
};

//Login
export const setLoginForm = (field: string, value: string): ISetLoginForm => {
  return {
    type: SET_LOGIN_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendLoginRequest = (): ISendLoginRequest => {
  return {
    type: SEND_LOGIN_REQUEST,
  }
};

export const loginRequestSuccess = (): ILoginRequestSuccess => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
  }
};

export const loginRequestFailed = (err?: string): ILoginRequestFailed => {
  return {
    type: LOGIN_REQUEST_FAILED,
    payload: err
  }
};

//Logout
export const sendLogoutRequest = (): ISendLogoutRequest => {
  return {
    type: SEND_LOGOUT_REQUEST
  }
};

export const logoutSuccess = (): ILogoutSuccess => {
  return {
    type: LOGOUT_REQUEST_SUCCESS,
  }
};

export const logoutFailed = (err?: string): ILogoutFailed => {
  return {
    type: LOGOUT_REQUEST_FAILED,
    payload: err
  }
};

//Forgot password
export const setResetPasswordForm = (field: string, value: string): ISetResetPasswordForm => {
  return {
    type: SET_RESET_PASSWORD_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendResetPasswordRequest = (): ISendResetPasswordRequest => {
  return {
    type: RESET_PASSWORD_REQUEST,
  }
};

export const ResetPasswordSuccess = (): IResetPasswordSuccess => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  }
};

export const ResetPasswordFailed = (err?: string): IResetPasswordFailed => {
  return {
    type: RESET_PASSWORD_FAILED,
    payload: err
  }
};

//Reset password
export const setNewPasswordForm = (field: string, value: string): ISetNewPasswordForm => {
  return {
    type: SET_NEW_PASSWORD_FORM,
    payload: {
      field,
      value
    }
  }
};

export const newPasswordRequest = (data: {password: string, token: string}): INewPasswordRequest => {
  return {
    type: NEW_PASSWORD_REQUEST,
    payload: data
  }
};

export const newPasswordSuccess = (): INewPasswordSuccess => {
  return {
    type: NEW_PASSWORD_SUCCESS,
  }
};

export const newPasswordFailed = (err?: string): INewPasswordFailed => {
  return {
    type: NEW_PASSWORD_FAILED,
    payload: err
  }
};

//Get profile info
export const getUserProfileRequest = (): IGetUserProfileRequest => {
  return {
    type: GET_USER_REQUEST,
  }
};

export const getUserProfileSuccess = (user: Pick<TUserInfo, "name" | "email">): IGetUserProfileSuccess => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
};

export const getUserProfileFailed = (err?: string): IGetUserProfileFailed => {
  return {
    type: GET_USER_FAILED,
    payload: err
  }
};

//Change profile info
export const setProfileInfoForm = (user: {field: string, value: string}): ISetProfileInfoForm => {
  return {
    type: SET_PROFILE_FORM,
    payload: user
  }
};

export const changeProfileInfoRequest = (): IChangeProfileInfoRequest => {
  return {
    type: PROFILE_FORM_SUBMIT,
  }
};

export const changeProfileInfoSuccess = (user: TUserInfo): IChangeProfileInfoSuccess => {
  return {
    type: PROFILE_SUBMIT_SUCCESS,
    payload: user
  }
};

export const changeProfileInfoFailed = (err?: string): IChangeProfileInfoFailed => {
  return {
    type: PROFILE_SUBMIT_FAILED,
    payload: err
  }
};

//Request new token
export const sendTokenRequest = (): ISendTokenRequest => {
  return {
    type: TOKEN_REQUEST,
  }
};

export const tokenRequestSuccess = (): ITokenRequestSuccess => {
  return {
    type: TOKEN_REQUEST_SUCCESS,
  }
};

export const tokenRequestFailed = (err?: string): ITokenRequestFailed => {
  return {
    type: TOKEN_REQUEST_FAILED,
    payload: err
  }
};
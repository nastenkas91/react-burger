import {
  loginRequestFailed,
  loginRequestSuccess,
  registrationRequestFailed,
  registrationRequestSuccess,
  ResetPasswordFailed,
  ResetPasswordSuccess,
  sendLoginRequest,
  sendRegistrationRequest,
  sendResetPasswordRequest,
  newPasswordRequest,
  newPasswordSuccess,
  newPasswordFailed,
  sendLogoutRequest,
  logoutSuccess,
  logoutFailed,
  getUserProfileRequest,
  setProfileInfoForm,
  getUserProfileSuccess,
  getUserProfileFailed,
  changeProfileInfoRequest,
  changeProfileInfoSuccess,
  changeProfileInfoFailed,
} from "../actionCreators/auth";
import {
  loginRequest,
  logoutRequest,
  registerRequest,
  resetPasswordRequest,
  getUserInfoRequest,
  updateUserInfoRequest,
  setNewPasswordRequest
} from "../../utils/api";
import {getCookie} from "../../utils/cookies";
import {
  authErrorMessage,
  commonErrorMessage,
  conflictingEmailMessage,
  registrationErrorMessage, tokenError
} from "../../utils/constants";
import {AppDispatch, AppThunk, TUserInfo} from "../../utils/types";

export const SET_REGISTRATION_FORM: 'SET_REGISTRATION_FORM' = 'SET_REGISTRATION_FORM';
export const SEND_REGISTRATION_REQUEST: 'SEND_REGISTRATION_REQUEST' = 'SEND_REGISTRATION_REQUEST';
export const REGISTRATION_REQUEST_SUCCESS: 'REGISTRATION_REQUEST_SUCCESS' = 'REGISTRATION_REQUEST_SUCCESS';
export const REGISTRATION_REQUEST_FAILED: 'REGISTRATION_REQUEST_FAILED' = 'REGISTRATION_REQUEST_FAILED';

export const SET_LOGIN_FORM: 'SET_LOGIN_FORM' = 'SET_LOGIN_FORM';
export const SEND_LOGIN_REQUEST: 'SEND_LOGIN_REQUEST' = 'SEND_LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS: 'LOGIN_REQUEST_SUCCESS' = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED: 'LOGIN_REQUEST_FAILED' = 'LOGIN_REQUEST_FAILED';

export const SEND_LOGOUT_REQUEST: 'SEND_LOGOUT_REQUEST' = 'SEND_LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCESS: 'LOGOUT_REQUEST_SUCCESS' = 'LOGOUT_REQUEST_SUCCESS';
export const LOGOUT_REQUEST_FAILED: 'LOGOUT_REQUEST_FAILED' = 'LOGOUT_REQUEST_FAILED';

export const SET_RESET_PASSWORD_FORM: 'SET_RESET_PASSWORD_FORM' = 'SET_RESET_PASSWORD_FORM';
export const RESET_PASSWORD_REQUEST: 'RESET_PASSWORD_REQUEST' = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS: 'RESET_PASSWORD_SUCCESS' = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED: 'RESET_PASSWORD_FAILED' = 'RESET_PASSWORD_FAILED';

export const SET_NEW_PASSWORD_FORM: 'SET_NEW_PASSWORD_FORM' = 'SET_NEW_PASSWORD_FORM';
export const NEW_PASSWORD_REQUEST: 'NEW_PASSWORD_REQUEST' = 'NEW_PASSWORD_REQUEST';
export const NEW_PASSWORD_SUCCESS: 'NEW_PASSWORD_SUCCESS' = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAILED: 'NEW_PASSWORD_FAILED' = 'NEW_PASSWORD_FAILED';

export const GET_USER_REQUEST: 'GET_USER_REQUEST' = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS: 'GET_USER_SUCCESS' = 'GET_USER_SUCCESS';
export const GET_USER_FAILED: 'GET_USER_FAILED' = 'GET_USER_FAILED';

export const SET_PROFILE_FORM: 'SET_PROFILE_FORM' = 'SET_PROFILE_FORM';
export const PROFILE_FORM_SUBMIT: 'PROFILE_FORM_SUBMIT' = 'PROFILE_FORM_SUBMIT';
export const PROFILE_SUBMIT_SUCCESS: 'PROFILE_SUBMIT_SUCCESS' = 'PROFILE_SUBMIT_SUCCESS';
export const PROFILE_SUBMIT_FAILED: 'PROFILE_SUBMIT_FAILED' = 'PROFILE_SUBMIT_FAILED';

export const TOKEN_REQUEST: 'TOKEN_REQUEST' = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS: 'TOKEN_REQUEST_SUCCESS' = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_FAILED: 'TOKEN_REQUEST_FAILED' = 'TOKEN_REQUEST_FAILED';

//action types
//Registration
export interface ISetRegistrationForm {
  readonly type: typeof SET_REGISTRATION_FORM,
  readonly payload: {
    field: string,
    value: string
  }
};

export interface ISendRegistrationRequest {
  readonly type: typeof SEND_REGISTRATION_REQUEST,
};

export interface IRegistrationRequestSuccess {
  readonly type: typeof REGISTRATION_REQUEST_SUCCESS,
};

export interface IRegistrationRequestFailed {
  readonly type: typeof REGISTRATION_REQUEST_FAILED,
  readonly payload?: string,
};

//Login
export interface ISetLoginForm {
  readonly type: typeof SET_LOGIN_FORM,
  readonly payload: {
    field: string,
    value: string
  }
};

export interface ISendLoginRequest {
  readonly type: typeof SEND_LOGIN_REQUEST,
};

export interface ILoginRequestSuccess {
  readonly type: typeof LOGIN_REQUEST_SUCCESS,
};

export interface ILoginRequestFailed {
  readonly type: typeof LOGIN_REQUEST_FAILED,
  readonly payload?: string,
};

//Logout
export interface ISendLogoutRequest {
  readonly type: typeof SEND_LOGOUT_REQUEST
};

export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_REQUEST_SUCCESS,
};

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_REQUEST_FAILED,
  readonly payload?: string,
};

//Forgot password
export interface ISetResetPasswordForm {
  readonly type: typeof SET_RESET_PASSWORD_FORM,
  readonly payload: {
    field: string,
    value: string
  }
};

export interface ISendResetPasswordRequest {
  readonly type: typeof RESET_PASSWORD_REQUEST,
};

export interface IResetPasswordSuccess {
  readonly type: typeof RESET_PASSWORD_SUCCESS,
};

export interface IResetPasswordFailed {
  readonly type: typeof RESET_PASSWORD_FAILED,
  readonly payload?: string,
};

//Reset password
export interface ISetNewPasswordForm {
  readonly type: typeof SET_NEW_PASSWORD_FORM,
  readonly payload: {
    field: string,
    value: string
  }
};

export interface INewPasswordRequest {
  readonly type: typeof NEW_PASSWORD_REQUEST,
  payload: {password: string, token: string}
};

export interface INewPasswordSuccess {
  readonly type: typeof NEW_PASSWORD_SUCCESS,
};

export interface INewPasswordFailed {
  readonly type: typeof NEW_PASSWORD_FAILED,
  readonly payload?: string,
};

//Get profile info
export interface IGetUserProfileRequest {
  readonly type: typeof GET_USER_REQUEST,
};

export interface IGetUserProfileSuccess {
  readonly type: typeof GET_USER_SUCCESS,
  readonly payload: Pick<TUserInfo, "name" | "email">,
};

export interface IGetUserProfileFailed {
  readonly type: typeof GET_USER_FAILED,
  readonly payload?: string,
};

//Change profile info
export interface ISetProfileInfoForm {
  readonly type: typeof SET_PROFILE_FORM,
  readonly payload: {
    field: string,
    value: string
  }
};

export interface IChangeProfileInfoRequest {
  readonly type: typeof PROFILE_FORM_SUBMIT,
};

export interface IChangeProfileInfoSuccess {
  readonly type: typeof PROFILE_SUBMIT_SUCCESS,
  payload: TUserInfo
};

export interface IChangeProfileInfoFailed {
  readonly type: typeof PROFILE_SUBMIT_FAILED,
  readonly payload?: string,
};

//Request new token
export interface ISendTokenRequest {
  readonly type: typeof TOKEN_REQUEST,
};

export interface ITokenRequestSuccess {
  readonly type: typeof TOKEN_REQUEST_SUCCESS,
};

export interface ITokenRequestFailed {
  readonly type: typeof TOKEN_REQUEST_FAILED,
  readonly payload?: string,
};

//actions
export const register = (user: TUserInfo): AppThunk => (dispatch: AppDispatch) => {
  dispatch(sendRegistrationRequest());
  registerRequest(user)
    .then((res: any) => {
      if(res && res.success) {
        const token = res.accessToken.split('Bearer ')[1];
        document.cookie = `accessToken=${token};  max-age=12000`;
        document.cookie = `refreshToken=${res.refreshToken};  max-age=12000`
        dispatch(registrationRequestSuccess())
      }
      else {
        dispatch(registrationRequestFailed())
      }
    })
    .catch(err => {
      if (err.message === 'User already exists') {
        dispatch(registrationRequestFailed(conflictingEmailMessage))
      } else {
        dispatch(registrationRequestFailed(registrationErrorMessage))
      }
    })
};

export const login = (user: Pick<TUserInfo, 'password' | 'email'>): AppThunk => (dispatch: AppDispatch) =>  {
  dispatch(sendLoginRequest());
  loginRequest(user)
    .then((res: any) => {
      if(res && res.success) {
        const token = res.accessToken.split('Bearer ')[1];
        document.cookie = `accessToken=${token};  max-age=12000`;
        document.cookie = `refreshToken=${res.refreshToken};  max-age=12000`
        dispatch(loginRequestSuccess())
      }
      else {
        dispatch(loginRequestFailed())
      }
    })
    .catch(err => {
      if (err.message === 'email or password are incorrect') {
        dispatch(loginRequestFailed(authErrorMessage))
      } else {
        dispatch(loginRequestFailed(commonErrorMessage))
      }
    })
};

export const logout = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(sendLogoutRequest());
  logoutRequest()
    .then((res: any) => {
      if(res && res.success) {
        document.cookie = `accessToken=${getCookie('accessToken')}; max-age=0`;
        document.cookie = `refreshToken=${getCookie('refreshToken')}; max-age=0`;
        dispatch(logoutSuccess())
      }
      else {
        dispatch(logoutFailed())
      }
    })
    .catch(err => dispatch(logoutFailed(commonErrorMessage)))
};

export const resetPassword = (email: string): AppThunk => (dispatch: AppDispatch) => {
  dispatch(sendResetPasswordRequest());
  resetPasswordRequest(email)
    .then((res: any) => {
      if(res && res.success) {
        dispatch(ResetPasswordSuccess())
      }
      else {
        dispatch(ResetPasswordFailed())
      }
    })
    .catch(err => dispatch(ResetPasswordFailed()))
};

export const sendNewPassword = (data: {"password": string, "token": string}): AppThunk => (dispatch: AppDispatch) => {
  dispatch(newPasswordRequest(data));
  setNewPasswordRequest(data)
    .then((res: any) => {
      if(res && res.success) {
        dispatch(newPasswordSuccess())
      }
      else {
        dispatch(newPasswordFailed())
      }
    })
    .catch(err => {
      if (err.message === 'Incorrect reset token') {
        dispatch(newPasswordFailed(tokenError))
      } else {
        dispatch(newPasswordFailed(commonErrorMessage))
      }
    })
};

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getUserProfileRequest());
  getUserInfoRequest()
    .then((res: any) => {
      if(res && res.success) {
        setProfileInfoForm(res.user)
        dispatch(getUserProfileSuccess(res.user))
      } else {
        dispatch(getUserProfileFailed())
      }
    })
    .catch(err => dispatch(getUserProfileFailed()))
};

export const updateUserInfo = (data: TUserInfo): AppThunk =>(dispatch: AppDispatch) => {
  dispatch(changeProfileInfoRequest());
  updateUserInfoRequest(data)
    .then((res: any) => {
      if(res && res.success) {
        dispatch(changeProfileInfoSuccess(res.user))
      }
      else {
        dispatch(changeProfileInfoFailed())
      }
    })
    .catch(err => {
      if (err.message === 'User with such email already exists') {
        dispatch(changeProfileInfoFailed(conflictingEmailMessage))
      } else {
        dispatch(changeProfileInfoFailed(commonErrorMessage))
      }
    })
};

export type TLoginActions =
  | ISetRegistrationForm
  | ISendRegistrationRequest
  | IRegistrationRequestSuccess
  | IRegistrationRequestFailed
  | ISetLoginForm
  | ISendLoginRequest
  | ILoginRequestSuccess
  | ILoginRequestFailed
  | ISendLogoutRequest
  | ILogoutSuccess
  | ILogoutFailed
  | ISendTokenRequest
  | ITokenRequestSuccess
  | ITokenRequestFailed;

export type TResetPassword =
  | ISetResetPasswordForm
  | ISendResetPasswordRequest
  | IResetPasswordSuccess
  | IResetPasswordFailed
  | ISetNewPasswordForm
  | INewPasswordRequest
  | INewPasswordSuccess
  | INewPasswordFailed;

export type TProfile =
  | IGetUserProfileRequest
  | IGetUserProfileSuccess
  | IGetUserProfileFailed
  | ISetProfileInfoForm
  | IChangeProfileInfoRequest
  | IChangeProfileInfoSuccess
  | IChangeProfileInfoFailed



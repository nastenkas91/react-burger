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
  getNewTokenRequest,
  getUserInfoRequest,
  updateUserInfoRequest,
  setNewPasswordRequest
} from "../../utils/api";
import {deleteCookie, setCookie} from "../../utils/cookies";

export const SET_REGISTRATION_FORM = 'SET_REGISTRATION_FORM';
export const SEND_REGISTRATION_REQUEST = 'SEND_REGISTRATION_REQUEST';
export const REGISTRATION_REQUEST_SUCCESS = 'REGISTRATION_REQUEST_SUCCESS';
export const REGISTRATION_REQUEST_FAILED = 'REGISTRATION_REQUEST_FAILED';

export const SET_LOGIN_FORM = 'SET_LOGIN_FORM';
export const SEND_LOGIN_REQUEST = 'SEND_LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';

export const SEND_LOGOUT_REQUEST = 'SEND_LOGOUT_REQUEST';
export const LOGOUT_REQUEST_SUCCESS = 'LOGOUT_REQUEST_SUCCESS';
export const LOGOUT_REQUEST_FAILED = 'LOGOUT_REQUEST_FAILED';

export const SET_RESET_PASSWORD_FORM = 'SET_RESET_PASSWORD_FORM';
export const RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST';
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS';
export const RESET_PASSWORD_FAILED = 'RESET_PASSWORD_FAILED';

export const SET_NEW_PASSWORD_FORM = 'SET_NEW_PASSWORD_FORM';
export const NEW_PASSWORD_REQUEST = 'NEW_PASSWORD_REQUEST';
export const NEW_PASSWORD_SUCCESS = 'NEW_PASSWORD_SUCCESS';
export const NEW_PASSWORD_FAILED = 'NEW_PASSWORD_FAILED';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const SET_PROFILE_FORM = 'SET_PROFILE_FORM';
export const PROFILE_FORM_SUBMIT = 'PROFILE_FORM_SUBMIT';
export const PROFILE_SUBMIT_SUCCESS = 'PROFILE_SUBMIT_SUCCESS';
export const PROFILE_SUBMIT_FAILED = 'PROFILE_SUBMIT_FAILED';
export const RESET_PROFILE_FORM = 'SET_PROFILE_FORM';

export const TOKEN_REQUEST = 'TOKEN_REQUEST';
export const TOKEN_REQUEST_SUCCESS = 'TOKEN_REQUEST_SUCCESS';
export const TOKEN_REQUEST_FAILED = 'TOKEN_REQUEST_FAILED';

export const register = (user) => {
  return function (dispatch) {
    dispatch(sendRegistrationRequest());
    registerRequest(user)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          const token = res.accessToken.split('Bearer ')[1];
          setCookie('accessToken', token);
          setCookie('refreshToken', res.refreshToken);
          dispatch(registrationRequestSuccess())
        }
        else {
          dispatch(registrationRequestFailed())
        }
      })
      .catch(dispatch(registrationRequestFailed()))
  }
};

export const login = (user) => {
  return function (dispatch) {
    dispatch(sendLoginRequest());
    loginRequest(user)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          const token = res.accessToken.split('Bearer ')[1];
          setCookie('accessToken', token);
          setCookie('refreshToken', res.refreshToken);
          dispatch(loginRequestSuccess())
        }
        else {
          dispatch(loginRequestFailed())
        }
      })
      .catch(dispatch(loginRequestFailed()))
  }
};

export const logout = (token) => {
  return function (dispatch) {
    dispatch(sendLogoutRequest());
    logoutRequest(token)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          deleteCookie('accessToken');
          deleteCookie('refreshToken');
          dispatch(logoutSuccess())
        }
        else {
          dispatch(logoutFailed())
        }
      })
      .catch(dispatch(logoutFailed()))
  }
};

export const resetPassword = (email) => {
  return function (dispatch) {
    dispatch(sendResetPasswordRequest());
    resetPasswordRequest(email)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          dispatch(ResetPasswordSuccess())
        }
        else {
          dispatch(ResetPasswordFailed())
        }
      })
      .catch(dispatch(ResetPasswordFailed()))
  }
};

export const sendNewPassword = (data) => {
  return function (dispatch) {
    dispatch(newPasswordRequest());
    setNewPasswordRequest(data)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          dispatch(newPasswordSuccess())
        }
        else {
          dispatch(newPasswordFailed())
        }
      })
      .catch(dispatch(newPasswordFailed()))
  }
};

export const getUser = (token) => {
  return function (dispatch) {
    dispatch(getUserProfileRequest());
    getUserInfoRequest(token)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          setProfileInfoForm(res.user)
          dispatch(getUserProfileSuccess(res.user))
        } else {
          dispatch(getUserProfileFailed())
        }
      })
      .catch(dispatch(getUserProfileFailed()))
  }
};

export const updateUserInfo = (data) => {
  return function (dispatch) {
    dispatch(changeProfileInfoRequest());
    updateUserInfoRequest(data)
      .then(res => {
        if(res && res.success) {
          console.log(res);
          dispatch(changeProfileInfoSuccess(res.user))
        }
        else {
          dispatch(changeProfileInfoFailed())
        }
      })
      .catch(dispatch(changeProfileInfoFailed()))
  }
};



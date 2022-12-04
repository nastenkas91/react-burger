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
} from '../actions/auth';

//Registration
export const setRegistrationForm = (field, value) => {
  return {
    type: SET_REGISTRATION_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendRegistrationRequest = () => {
  return {
    type: SEND_REGISTRATION_REQUEST,
  }
};

export const registrationRequestSuccess = () => {
  return {
    type: REGISTRATION_REQUEST_SUCCESS,
  }
};

export const registrationRequestFailed = (err) => {
  return {
    type: REGISTRATION_REQUEST_FAILED,
    payload: err
  }
};

//Login
export const setLoginForm = (field, value) => {
  return {
    type: SET_LOGIN_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendLoginRequest = () => {
  return {
    type: SEND_LOGIN_REQUEST,
  }
};

export const loginRequestSuccess = () => {
  return {
    type: LOGIN_REQUEST_SUCCESS,
  }
};

export const loginRequestFailed = (err) => {
  return {
    type: LOGIN_REQUEST_FAILED,
    payload: err
  }
};

//Logout
export const sendLogoutRequest = (token) => {
  return {
    type: SEND_LOGOUT_REQUEST,
    payload: token
  }
};

export const logoutSuccess = () => {
  return {
    type: LOGOUT_REQUEST_SUCCESS,
  }
};

export const logoutFailed = (err) => {
  return {
    type: LOGOUT_REQUEST_FAILED,
    payload: err
  }
};

//Forgot password
export const setResetPasswordForm = (field, value) => {
  return {
    type: SET_RESET_PASSWORD_FORM,
    payload: {
      field,
      value
    }
  }
};

export const sendResetPasswordRequest = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
  }
};

export const ResetPasswordSuccess = () => {
  return {
    type: RESET_PASSWORD_SUCCESS,
  }
};

export const ResetPasswordFailed = (err) => {
  return {
    type: RESET_PASSWORD_FAILED,
    payload: err
  }
};

//Reset password
export const setNewPasswordForm = (field, value) => {
  return {
    type: SET_NEW_PASSWORD_FORM,
    payload: {
      field,
      value
    }
  }
};

export const newPasswordRequest = (data) => {
  return {
    type: NEW_PASSWORD_REQUEST,
    payload: data
  }
};

export const newPasswordSuccess = () => {
  return {
    type: NEW_PASSWORD_SUCCESS,
  }
};

export const newPasswordFailed = (err) => {
  return {
    type: NEW_PASSWORD_FAILED,
    payload: err
  }
};

//Get profile info
export const getUserProfileRequest = () => {
  return {
    type: GET_USER_REQUEST,
  }
};

export const getUserProfileSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  }
};

export const getUserProfileFailed = (err) => {
  return {
    type: GET_USER_FAILED,
    payload: err
  }
};

//Change profile info
export const setProfileInfoForm = (field, value) => {
  return {
    type: SET_PROFILE_FORM,
    payload: {
      field,
      value
    }
  }
};

export const changeProfileInfoRequest = () => {
  return {
    type: PROFILE_FORM_SUBMIT,
  }
};

export const changeProfileInfoSuccess = (user) => {
  return {
    type: PROFILE_SUBMIT_SUCCESS,
    payload: user
  }
};

export const changeProfileInfoFailed = (err) => {
  return {
    type: PROFILE_SUBMIT_FAILED,
    payload: err
  }
};

//Request new token
export const sendTokenRequest = () => {
  return {
    type: TOKEN_REQUEST,
  }
};

export const tokenRequestSuccess = () => {
  return {
    type: TOKEN_REQUEST_SUCCESS,
  }
};

export const tokenRequestFailed = (err) => {
  return {
    type: TOKEN_REQUEST_FAILED,
    payload: err
  }
};
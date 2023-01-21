import {
  GET_USER_FAILED,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  LOGIN_REQUEST_FAILED,
  LOGIN_REQUEST_SUCCESS,
  LOGOUT_REQUEST_FAILED,
  LOGOUT_REQUEST_SUCCESS,
  NEW_PASSWORD_FAILED,
  NEW_PASSWORD_REQUEST,
  NEW_PASSWORD_SUCCESS,
  PROFILE_FORM_SUBMIT,
  PROFILE_SUBMIT_FAILED,
  PROFILE_SUBMIT_SUCCESS,
  REGISTRATION_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  SEND_LOGIN_REQUEST,
  SEND_LOGOUT_REQUEST,
  SEND_REGISTRATION_REQUEST,
  SET_LOGIN_FORM,
  SET_NEW_PASSWORD_FORM,
  SET_PROFILE_FORM,
  SET_REGISTRATION_FORM,
  SET_RESET_PASSWORD_FORM,
  TLoginActions,
  TOKEN_REQUEST,
  TOKEN_REQUEST_FAILED,
  TOKEN_REQUEST_SUCCESS,
  TProfile,
  TResetPassword,
} from '../actions/auth';
import {getCookie} from "../../utils/cookies";

//state types
type TLoginState = {
  isLoggedIn: boolean,
  sendLoginRequest: boolean,
  failedLoginRequest: boolean,
  sendLogoutRequest: boolean,
  failedLogoutRequest: boolean,
  sendRefreshTokenRequest: boolean,
  failedRefreshTokenRequest: boolean,
  sendRequest: boolean,
  failedRequest: boolean,
  registrationForm: {
    email: string,
    name: string,
    password: string
  },
  loginForm: {
    email: string,
    password: string
  },
  error: string | undefined | null
};

type TResetPasswordFormState = {
  forgotRequest: boolean,
  successfulForgotRequest: boolean,
  forgotForm: {
    email: string,
  },
  sendRequest: boolean,
  failedRequest: boolean,
  successfulResetRequest: boolean,
  resetForm: {
    password: string,
    token: string
  },
  error: string | null | undefined
};

type TProfileState = {
  sendRequest: boolean,
  failedRequest: boolean,
  user: {
    userEmail: string,
    userName: string,
  },
  form: {
    email: string,
    name: string,
    password: string
  },
  error: string | null | undefined
};

//states
export const loginState: TLoginState = {
  isLoggedIn: !!getCookie('accessToken'),
  sendLoginRequest: false,
  failedLoginRequest: false,
  sendLogoutRequest: false,
  failedLogoutRequest: false,
  sendRefreshTokenRequest: false,
  failedRefreshTokenRequest: false,
  sendRequest: false,
  failedRequest: false,
  registrationForm: {
    email: '',
    name: '',
    password: ''
  },
  loginForm: {
    email: '',
    password: ''
  },
  error: null
};

export const resetPasswordFormState: TResetPasswordFormState = {
  forgotRequest: false,
  successfulForgotRequest: false,
  forgotForm: {
    email: '',
  },
  sendRequest: false,
  failedRequest: false,
  successfulResetRequest: false,
  resetForm: {
    password: '',
    token: ''
  },
  error: null
};

export const profileState: TProfileState = {
  sendRequest: false,
  failedRequest: false,
  user: {
    userEmail: '',
    userName: '',
  },
  form: {
    email: '',
    name: '',
    password: ''
  },
  error: null
};

export const loginReducer = (state = loginState, action: TLoginActions): TLoginState => {
  switch (action.type) {
    case SET_REGISTRATION_FORM: {
      return {
        ...state,
        registrationForm: {
          ...state.registrationForm,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case SEND_REGISTRATION_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      }
    }
    case REGISTRATION_REQUEST_SUCCESS: {
      return {
        ...state,
        registrationForm: {
          ...state.registrationForm,
          email: '',
          name: '',
          password: ''
        },
        sendRequest: false,
        isLoggedIn: true,
        error: null
      }
    }
    case REGISTRATION_REQUEST_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
        error: action.payload
      }
    }
    case SET_LOGIN_FORM: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case SEND_LOGIN_REQUEST: {
      return {
        ...state,
        sendLoginRequest: true,
      }
    }
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          email: '',
          password: ''
        },
        sendLoginRequest: false,
        isLoggedIn: true,
        error: null
      }
    }
    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        sendLoginRequest: false,
        failedLoginRequest: true,
        error: action.payload
      }
    }
    case TOKEN_REQUEST: {
      return {
        ...state,
        sendRefreshTokenRequest: true,
      }
    }
    case TOKEN_REQUEST_SUCCESS: {
      return {
        ...state,
        sendRefreshTokenRequest: false,
        failedRefreshTokenRequest: false,
        isLoggedIn: true,
        error: null
      }
    }
    case TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        sendRefreshTokenRequest: false,
        failedRefreshTokenRequest: true,
        isLoggedIn: false,
        error: action.payload
      }
    }
    case SEND_LOGOUT_REQUEST: {
      return {
        ...state,
        sendLogoutRequest: true,
      }
    }
    case LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        sendLogoutRequest: false,
        loginForm: {
          ...state.loginForm,
          email: '',
          password: '',
        },
        isLoggedIn: false,
        error: null
      }
    }
    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        sendLogoutRequest: false,
        failedLogoutRequest: true,
        isLoggedIn: true,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export const resetPasswordReducer = (state = resetPasswordFormState, action: TResetPassword): TResetPasswordFormState => {
  switch (action.type) {
    case SET_RESET_PASSWORD_FORM: {
      return {
        ...state,
        forgotForm: {
          ...state.forgotForm,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        sendRequest: true,
        successfulResetRequest: false,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotForm: {
          ...state.forgotForm,
          email: '',
        },
        forgotRequest: false,
        successfulForgotRequest: true,
        error: null
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        successfulForgotRequest: false,
        error: action.payload
      }
    }

    case SET_NEW_PASSWORD_FORM: {
      return {
        ...state,
        resetForm: {
          ...state.resetForm,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case NEW_PASSWORD_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      }
    }
    case NEW_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetForm: {
          ...state.resetForm,
          password: '',
          token: ''
        },
        sendRequest: false,
        successfulResetRequest: true,
        failedRequest:false,
        error: null
      }
    }
    case NEW_PASSWORD_FAILED: {
      return {
        ...state,
        sendRequest: false,
        successfulResetRequest: false,
        failedRequest: true,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
};

export const profileReducer = (state = profileState, action: TProfile): TProfileState => {
  switch (action.type) {
    case SET_PROFILE_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case PROFILE_FORM_SUBMIT: {
      return {
        ...state,
        sendRequest: true,
      }
    }
    case PROFILE_SUBMIT_SUCCESS: {
      return {
        ...state,
        form: {
          ...state.form,
          email: action.payload.email,
          name: action.payload.name,
          password: ''
        },
        sendRequest: false,
        error: null
      }
    }
    case PROFILE_SUBMIT_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
        error: action.payload
      }
    }
    case GET_USER_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      }
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        user: {
          ...state.user,
          userEmail: action.payload.email,
          userName: action.payload.name,
        },
        form: {
          ...state.form,
          email: action.payload.email,
          name: action.payload.name,
          password: ''
        },
        sendRequest: false,
        error: null
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
        error: action.payload
      }
    }
    default: {
      return state;
    }
  }
}
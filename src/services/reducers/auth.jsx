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

const loginState = {
  isLoggedIn: false,
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
  error: ''
};

const resetPasswordFormState = {
  sendRequest: false,
  successfulRequest: false,
  form: {
    email: '',
  },
};

const newPasswordFormState = {
  sendRequest: false,
  failedRequest: false,
  form: {
    password: '',
    token: ''
  },
};

const profileState = {
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
};

export const loginReducer = (state = loginState, action) => {
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
      }
    }
    case REGISTRATION_REQUEST_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
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
        sendLoginLoginRequest: true,
      }
    }
    case LOGIN_REQUEST_SUCCESS: {
      return {
        ...state,
        loginForm: {
          email: '',
          password: ''
        },
        sendLoginRequest: false,
        isLoggedIn: true,
      }
    }
    case LOGIN_REQUEST_FAILED: {
      return {
        ...state,
        sendLoginRequest: false,
        failedLoginRequest: true,
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
      }
    }
    case TOKEN_REQUEST_FAILED: {
      return {
        ...state,
        sendRefreshTokenRequest: false,
        failedRefreshTokenRequest: true,
        isLoggedIn: false,
      }
    }
    case SEND_LOGOUT_REQUEST: {
      return {
        ...state,
        sendLoginLoginRequest: true,
      }
    }
    case LOGOUT_REQUEST_SUCCESS: {
      return {
        ...state,
        sendLogoutRequest: false,
        user: {
          ...state.user,
          email: '',
          name: '',
        },
        isLoggedIn: false,
      }
    }
    case LOGOUT_REQUEST_FAILED: {
      return {
        ...state,
        sendLogoutRequest: false,
        failedLogoutRequest: true,
        isLoggedIn: true,
      }
    }
    default: {
      return state;
    }
  }
};

export const resetPasswordReducer = (state = resetPasswordFormState, action) => {
  switch (action.type) {
    case SET_RESET_PASSWORD_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
          [action.payload.field]: action.payload.value
        }
      }
    }
    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        sendRequest: true,
      }
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        form: {
          email: '',
        },
        sendRequest: false,
        successfulRequest: true,
      }
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        sendRequest: false,
        successfulRequest: false,
      }
    }
    default: {
      return state;
    }
  }
};

export const newPasswordReducer = (state = newPasswordFormState, action) => {
  switch (action.type) {
    case SET_NEW_PASSWORD_FORM: {
      return {
        ...state,
        form: {
          ...state.form,
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
        form: {
          password: '',
          token: ''
        },
        sendRequest: false,
      }
    }
    case NEW_PASSWORD_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
      }
    }
    default: {
      return state;
    }
  }
}

export const profileReducer = (state = profileState, action) => {
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
          email: action.payload.email,
          name: action.payload.name,
          password: ''
        },
        sendRequest: false,
      }
    }
    case PROFILE_SUBMIT_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
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
          userEmail: action.payload.email,
          userName: action.payload.name,
        },
        form: {
          email: action.payload.email,
          name: action.payload.name,
          password: ''
        },
        sendRequest: false,
      }
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        sendRequest: false,
        failedRequest: true,
      }
    }
    default: {
      return state;
    }
  }
}
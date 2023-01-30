import {loginReducer, resetPasswordReducer, profileReducer, loginState, resetPasswordFormState, profileState} from "./auth";
import * as types from '../actions/auth';

describe('login reducer',
  () => {
    it('should return the initial state', () => {
      expect(loginReducer(loginState, {})).toEqual(loginState)
    })

    it('should handle SET_REGISTRATION_FORM', () => {
      expect(
        loginReducer(loginState, {
          type: types.SET_REGISTRATION_FORM,
          payload: {
            field: 'email',
            value: 'value'
          }
        })
      ).toEqual(
        {
          ...loginState,
          registrationForm: {
            ...loginState.registrationForm,
            email: 'value',
          }
        }
      )
    })

    it('should handle SEND_REGISTRATION_REQUEST', () => {
      expect(
        loginReducer(loginState, {
          type: types.SEND_REGISTRATION_REQUEST,
        })
      ).toEqual(
        {
          ...loginState,
          sendRequest: true,
        }
      )
    })

    it('should handle REGISTRATION_REQUEST_SUCCESS', () => {
      expect(
        loginReducer(loginState, {
          type: types.REGISTRATION_REQUEST_SUCCESS,
        })
      ).toEqual(
        {
          ...loginState,
          registrationForm: {
            ...loginState.registrationForm,
            email: '',
            name: '',
            password: ''
          },
          sendRequest: false,
          isLoggedIn: true,
          error: null
        }
      )
    })

    it('should handle REGISTRATION_REQUEST_FAILED', () => {
      expect(
        loginReducer(loginState, {
          type: types.REGISTRATION_REQUEST_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...loginState,
          sendRequest: false,
          failedRequest: true,
          error: 'error'
        }
      )
    })

    it('should handle SET_LOGIN_FORM', () => {
      expect(
        loginReducer(loginState, {
          type: types.SET_LOGIN_FORM,
          payload: {
            field: 'email',
            value: 'value'
          }
        })
      ).toEqual(
        {
          ...loginState,
          loginForm: {
            ...loginState.loginForm,
            email: 'value',
          }
        }
      )
    })

    it('should handle SEND_LOGIN_REQUEST', () => {
      expect(
        loginReducer(loginState, {
          type: types.SEND_LOGIN_REQUEST,
        })
      ).toEqual(
        {
          ...loginState,
          sendLoginRequest: true,
        }
      )
    })

    it('should handle LOGIN_REQUEST_SUCCESS', () => {
      expect(
        loginReducer(loginState, {
          type: types.LOGIN_REQUEST_SUCCESS,
        })
      ).toEqual(
        {
          ...loginState,
          loginForm: {
            ...loginState.loginForm,
            email: '',
            password: ''
          },
          sendLoginRequest: false,
          isLoggedIn: true,
          error: null
        }
      )
    })

    it('should handle LOGIN_REQUEST_FAILED', () => {
      expect(
        loginReducer(loginState, {
          type: types.LOGIN_REQUEST_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...loginState,
          sendLoginRequest: false,
          failedLoginRequest: true,
          error: 'error'
        }
      )
    })

    it('should handle TOKEN_REQUEST', () => {
      expect(
        loginReducer(loginState, {
          type: types.TOKEN_REQUEST,
        })
      ).toEqual(
        {
          ...loginState,
          sendRefreshTokenRequest: true,
        }
      )
    })

    it('should handle TOKEN_REQUEST_SUCCESS', () => {
      expect(
        loginReducer(loginState, {
          type: types.TOKEN_REQUEST_SUCCESS,
        })
      ).toEqual(
        {
          ...loginState,
          sendRefreshTokenRequest: false,
          failedRefreshTokenRequest: false,
          isLoggedIn: true,
          error: null
        }
      )
    })

    it('should handle TOKEN_REQUEST_FAILED', () => {
      expect(
        loginReducer(loginState, {
          type: types.TOKEN_REQUEST_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...loginState,
          sendRefreshTokenRequest: false,
          failedRefreshTokenRequest: true,
          isLoggedIn: false,
          error: 'error'
        }
      )
    })

    it('should handle SEND_LOGOUT_REQUEST', () => {
      expect(
        loginReducer(loginState, {
          type: types.SEND_LOGOUT_REQUEST,
        })
      ).toEqual(
        {
          ...loginState,
          sendLogoutRequest: true,
        }
      )
    })

    it('should handle LOGOUT_REQUEST_SUCCESS', () => {
      expect(
        loginReducer(loginState, {
          type: types.LOGOUT_REQUEST_SUCCESS,
        })
      ).toEqual(
        {
          ...loginState,
          sendLogoutRequest: false,
          loginForm: {
            ...loginState.loginForm,
            email: '',
            password: '',
          },
          isLoggedIn: false,
          error: null
        }
      )
    })

    it('should handle LOGOUT_REQUEST_FAILED', () => {
      expect(
        loginReducer(loginState, {
          type: types.LOGOUT_REQUEST_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...loginState,
          sendLogoutRequest: false,
          failedLogoutRequest: true,
          isLoggedIn: true,
          error: 'error'
        }
      )
    })
  });

describe('reset password reducer',
  () => {
    it('should return the initial state', () => {
      expect(resetPasswordReducer(resetPasswordFormState, {})).toEqual(resetPasswordFormState)
    })

    it('should handle SET_RESET_PASSWORD_FORM', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.SET_RESET_PASSWORD_FORM,
          payload: {
            field: 'email',
            value: 'value'
          }
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          forgotForm: {
            ...resetPasswordFormState.forgotForm,
            email: 'value',
          }
        }
      )
    })

    it('should handle RESET_PASSWORD_REQUEST', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.RESET_PASSWORD_REQUEST,
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          sendRequest: true,
          successfulResetRequest: false,
        }
      )
    })

    it('should handle RESET_PASSWORD_SUCCESS', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.RESET_PASSWORD_SUCCESS,
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          forgotForm: {
            ...resetPasswordFormState.forgotForm,
            email: '',
          },
          forgotRequest: false,
          successfulForgotRequest: true,
          error: null
        }
      )
    })

    it('should handle RESET_PASSWORD_FAILED', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.RESET_PASSWORD_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          forgotRequest: false,
          successfulForgotRequest: false,
          error: 'error'
        }
      )
    })

    it('should handle SET_NEW_PASSWORD_FORM', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.SET_NEW_PASSWORD_FORM,
          payload: {
            field: 'email',
            value: 'value'
          }
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          resetForm: {
            ...resetPasswordFormState.resetForm,
            email: 'value',
          }
        }
      )
    })

    it('should handle NEW_PASSWORD_REQUEST', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.NEW_PASSWORD_REQUEST,
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          sendRequest: true,
        }
      )
    })

    it('should handle NEW_PASSWORD_SUCCESS', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.NEW_PASSWORD_SUCCESS,
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          resetForm: {
            ...resetPasswordFormState.resetForm,
            password: '',
            token: ''
          },
          sendRequest: false,
          successfulResetRequest: true,
          failedRequest:false,
          error: null
        }
      )
    })

    it('should handle NEW_PASSWORD_FAILED', () => {
      expect(
        resetPasswordReducer(resetPasswordFormState, {
          type: types.NEW_PASSWORD_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...resetPasswordFormState,
          sendRequest: false,
          successfulResetRequest: false,
          failedRequest: true,
          error: 'error'
        }
      )
    })
  });

describe('reset profile reducer',
  () => {
    it('should return the initial state', () => {
      expect(profileReducer(profileState, {})).toEqual(profileState)
    })

    it('should handle SET_PROFILE_FORM', () => {
      const action = {
        type: types.SET_PROFILE_FORM,
        payload: {
          field: 'email',
          value: 'value'
        }
      }
      expect(
        profileReducer(profileState, action)
      ).toEqual(
        {
          ...profileState,
          form: {
            ...profileState.form,
            email: 'value',
          }
        }
      )
    })

    it('should handle PROFILE_FORM_SUBMIT', () => {
      expect(
        profileReducer(profileState, {
          type: types.PROFILE_FORM_SUBMIT,
        })
      ).toEqual(
        {
          ...profileState,
          sendRequest: true,
        }
      )
    })

    it('should handle PROFILE_SUBMIT_SUCCESS', () => {
      const action = {
        type: types.PROFILE_SUBMIT_SUCCESS,
        payload: {
          email: 'email',
          name: 'name'
        }
      };
      expect(
        profileReducer(profileState, action)
      ).toEqual(
        {
          ...profileState,
          form: {
            ...profileState.form,
            email: 'email',
            name: 'name',
            password: ''
          },
          sendRequest: false,
          error: null
        }
      )
    })

    it('should handle PROFILE_SUBMIT_FAILED', () => {
      expect(
        profileReducer(profileState, {
          type: types.PROFILE_SUBMIT_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...profileState,
          sendRequest: false,
          failedRequest: true,
          error: 'error'
        }
      )
    })

    it('should handle GET_USER_REQUEST', () => {
      expect(
        profileReducer(profileState, {
          type: types.GET_USER_REQUEST,
        })
      ).toEqual(
        {
          ...profileState,
          sendRequest: true,
        }
      )
    })

    it('should handle GET_USER_SUCCESS', () => {
      const action = {
        type: types.GET_USER_SUCCESS,
        payload: {
          field: 'email',
          value: 'value'
        }
      };
      expect(
        profileReducer(profileState, action)
      ).toEqual(
        {
          ...profileState,
          user: {
            ...profileState.user,
            userEmail: action.payload.email,
            userName: action.payload.name,
          },
          form: {
            ...profileState.form,
            email: action.payload.email,
            name: action.payload.name,
            password: ''
          },
          sendRequest: false,
          error: null
        }
      )
    })

    it('should handle GET_USER_FAILED', () => {
      expect(
        profileReducer(profileState, {
          type: types.GET_USER_FAILED,
          payload: 'error'
        })
      ).toEqual(
        {
          ...profileState,
          sendRequest: false,
          failedRequest: true,
          error: 'error'
        }
      )
    })
  })
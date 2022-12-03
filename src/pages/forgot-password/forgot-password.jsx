import styles from './forgot-password.module.css';
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {resetPassword} from "../../services/actions/auth";
import {setResetPasswordForm} from "../../services/actionCreators/auth";
import {isAuth} from "../../utils/utils";

export const ForgotPassword = () => {
  let isLoggedIn = isAuth();
  const history = useHistory();
  const dispatch = useDispatch();
  const {email} = useSelector(state => state.resetPasswordReducer.form)
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e) {
    setFormIsValid(e.target.closest('.form').checkValidity());
  }
  const handleFormChange = (e) => {
    dispatch(setResetPasswordForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword({
        "email": email,
      }
    ));
    history.push({
      pathname: '/reset-password',
      state: {from: '/forgot-password'}
    })
  }

  if (isLoggedIn) {
    return (
      <Redirect to={{pathname: '/'}} />
    )
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Восстановление пароля'}
        buttonTitle={'Восстановить'}
        onSubmit={handleFormSubmit}
      >
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={email}
          placeholder={'Укажите e-mail'}
          onChange={handleFormChange}
        />
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вспомнили пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
    </PageWithForm>

  )
}
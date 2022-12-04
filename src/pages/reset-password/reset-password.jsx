import styles from './reset-password.module.css';
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, Redirect, useLocation} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {sendNewPassword} from "../../services/actions/auth";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setNewPasswordForm} from "../../services/actionCreators/auth";
import {Spinner} from "../../components/spinner/spinner";

export const ResetPassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const {password, token} = useSelector(state => state.resetPasswordReducer.resetForm)
  const {sendResetRequest, successfulResetRequest, error} = useSelector(state => state.resetPasswordReducer);
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e) {
    setFormIsValid(e.target.closest('.form').checkValidity());
  }
  const handleFormChange = (e) => {
    dispatch(setNewPasswordForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(sendNewPassword({
        "password": password,
        "token": token
      }
    ));
  }


  if (location.state?.from !== '/forgot-password') {
    return (
      <Redirect to={{pathname: '/forgot-password'}} />
    )
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Восстановление пароля'}
        buttonTitle={'Сохранить'}
        onSubmit={handleFormSubmit}
      >
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={password}
          icon={'ShowIcon'}
          onChange={handleFormChange}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          extraClass={`mb-6`}
          name={'token'}
          value={token}
          onChange={handleFormChange}
        />
        {
          error && <p className={`${styles.text} text text_type_main-default text_color_error mb-4`}>{error}</p>
        }
        {
          successfulResetRequest && <p className={`${styles.text} text text_type_main-default text_color_success mb-4`}>Пароль успешно изменен</p>
        }
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вспомнили пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
      {
        sendResetRequest &&
        <Spinner />
      }
    </PageWithForm>

  )
}
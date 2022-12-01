import styles from './login.module.css';
import {PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, Redirect, useLocation} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {setLoginForm} from "../../services/actionCreators/auth";
import {login} from "../../services/actions/auth";
import {isAuth} from "../../utils/utils";

export const Login = () => {
  let loggedin = isAuth();
  const dispatch = useDispatch();
  const location = useLocation();
  const {email, password} = useSelector(state => state.loginReducer.form)
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e) {
    setFormIsValid(e.target.closest('.form').checkValidity());
  }
  const handleFormChange = (e) => {
    dispatch(setLoginForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(login({
        "email": email,
        "password": password,
      }
    ));
  }

  const nextPage = location.state?.from.pathname || '/';

  if (loggedin) {
    return (
      <Redirect to={nextPage} />
    )
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Вход'}
        buttonTitle={'Войти'}
        onSubmit={handleFormSubmit}
      >
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={email}
          onChange={handleFormChange}
        />
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={password}
          icon={'ShowIcon'}
          onChange={handleFormChange}
        />
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вы — новый пользователь?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/register'}> Зарегистрироваться</NavLink>
      </p>
      <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
        Забыли пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/forgot-password'}> Восстановить пароль</NavLink>
      </p>
    </PageWithForm>
  )
}
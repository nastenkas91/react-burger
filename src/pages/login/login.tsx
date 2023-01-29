import styles from './login.module.css';
import {PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {useDispatch, useSelector} from "../../utils/hooks";
import {ChangeEvent, FC, SyntheticEvent, useState} from "react";
import {setLoginForm} from "../../services/actionCreators/auth";
import {login} from "../../services/actions/auth";
import {Spinner} from "../../components/spinner/spinner";

export const Login: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const {email, password} = useSelector(state => state.loginReducer.loginForm)
  const {sendLoginRequest, error} = useSelector(state => state.loginReducer)
  const [formIsValid, setFormIsValid] = useState(false);

  function handleFormValidation(e: ChangeEvent<HTMLInputElement>) {
    // @ts-ignore
    setFormIsValid(e.target.closest('.form')!.checkValidity());
  }
  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setLoginForm(e.target.name, e.target.value));
    handleFormValidation(e);
  }
  const handleFormSubmit = (e: SyntheticEvent<Element, Event>) => {
    e.preventDefault();
    dispatch(login({
        "email": email,
        "password": password,
      }
    ));
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
          value={email || ''}
          onChange={handleFormChange}
          data-testid='email-input'
        />
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={password || ''}
          icon={'ShowIcon'}
          onChange={handleFormChange}
          data-testid='password_input'
        />
        {
          error && <p className={`${styles.text} text text_type_main-default text_color_error mb-4`}>{error}</p>
        }
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вы — новый пользователь?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/register'}> Зарегистрироваться</NavLink>
      </p>
      <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
        Забыли пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/forgot-password'}> Восстановить пароль</NavLink>
      </p>
      {
        sendLoginRequest &&
        <Spinner />
      }
    </PageWithForm>
  )
}
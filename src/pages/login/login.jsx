import styles from './login.module.css';
import {PasswordInput, EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useInputChange} from '../../utils/hooks';
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";

export const Login = () => {
  const {values, formIsValid, handleChange} = useInputChange({})

  return (
    <PageWithForm>
      <Form formIsValid={formIsValid} formTitle={'Вход'} buttonTitle={'Войти'}>
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={values['email'] || ''}
          onChange={handleChange}
        />
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={values['password'] || ''}
          icon={'ShowIcon'}
          onChange={handleChange}
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
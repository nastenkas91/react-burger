import styles from './forgot-password.module.css';
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useInputChange} from "../../utils/hooks";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";

export const ForgotPassword = () => {
  const {values, formIsValid, handleChange} = useInputChange({})

  return (
    <PageWithForm>
      <Form formIsValid={formIsValid} formTitle={'Восстановление пароля'} buttonTitle={'Восстановить'}>
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={values['email'] || ''}
          placeholder={'Укажите e-mail'}
          onChange={handleChange}
        />
      </Form>
      <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
        Вспомнили пароль?
        <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
      </p>
    </PageWithForm>

  )
}
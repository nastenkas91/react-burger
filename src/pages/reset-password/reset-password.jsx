import styles from './reset-password.module.css';
import {EmailInput, Input} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useInputChange} from "../../utils/hooks";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";

export const ResetPassword = () => {
  const {values, formIsValid, handleChange} = useInputChange({})

  return (
    <PageWithForm>
      <Form formIsValid={formIsValid} formTitle={'Восстановление пароля'} buttonTitle={'Сохранить'}>
        <EmailInput
          extraClass={`mb-6`}
          name={'email'}
          value={values['email'] || ''}
          placeholder={'Введите новый пароль'}
          onChange={handleChange}
        />
        <Input
          type={'text'}
          placeholder={'Введите код из письма'}
          extraClass={`mb-6`}
          name={'code'}
          value={values['code'] || ''}
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
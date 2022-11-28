import styles from './reset-password.module.css';
import {Input, PasswordInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink} from "react-router-dom";
import {useInputChange} from "../../utils/hooks";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {setNewPassword} from "../../utils/api";

export const ResetPassword = () => {
  const {values, formIsValid, handleChange} = useInputChange({})
  function setPassword() {
    const request = {
      "password": values['password'],
      "token": values['code']
    }

    setNewPassword(request)
      .then(res => {
        if(res && res.success) {
          console.log(res.message)
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Восстановление пароля'}
        buttonTitle={'Сохранить'}
        onSubmit={setPassword}
      >
        <PasswordInput
          extraClass={`mb-6`}
          name={'password'}
          value={values['password'] || ''}
          icon={'ShowIcon'}
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
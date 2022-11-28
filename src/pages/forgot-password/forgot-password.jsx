import styles from './forgot-password.module.css';
import {EmailInput} from "@ya.praktikum/react-developer-burger-ui-components";
import {NavLink, useHistory} from "react-router-dom";
import {useInputChange} from "../../utils/hooks";
import {PageWithForm} from "../page-with-form/page-with-form";
import {Form} from "../../components/form/form";
import {resetPassword} from "../../utils/api";

export const ForgotPassword = () => {
  const {values, formIsValid, handleChange} = useInputChange({})

  const history = useHistory();

  function handlePasswordReset() {
    const request = {
      "email": values['email']
    }

    resetPassword(request)
      .then(res => {
        if(res && res.success) {
          history.push('/reset-password')
        }
      })
      .catch(err => console.log(err))
  }

  return (
    <PageWithForm>
      <Form
        formIsValid={formIsValid}
        formTitle={'Восстановление пароля'}
        buttonTitle={'Восстановить'}
        onSubmit={handlePasswordReset}
      >
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
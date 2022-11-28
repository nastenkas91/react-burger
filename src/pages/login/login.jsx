import styles from './login.module.css';
import {PasswordInput, EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export const Login = () => {
  const [values, setValues] = useState({});
  const [formIsValid, setFormIsValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({...values, [name]: value});
    setFormIsValid(e.target.closest('.frm').checkValidity() && values['email'])
  }

  return (
    <section className={`${styles.page}`}>
      <div className={`${styles.container}`}>
        <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>Вход</h2>
        <form className={`${styles.form} frm`}>
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
          <Button
            extraClass={`${styles.form__submitBtn} mb-20`}
            htmlType={"submit"}
            type={'primary'}
            disabled={!formIsValid}
          >
            Войти
          </Button>
        </form>
        <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
          Вы — новый пользователь?
          <NavLink className={`${styles.link} text text_color_accent`} to={'/register'}> Зарегистрироваться</NavLink>
        </p>
        <p className={`${styles.text} text text_type_main-default text_color_inactive`}>
          Забыли пароль?
          <NavLink className={`${styles.link} text text_color_accent`} to={'/reset-password'}> Восстановить пароль</NavLink>
        </p>
      </div>
    </section>

  )
}
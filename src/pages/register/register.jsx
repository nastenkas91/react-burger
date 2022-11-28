import styles from './register.module.css';
import {Input, PasswordInput, EmailInput, Button} from "@ya.praktikum/react-developer-burger-ui-components";
import {useState} from "react";
import {NavLink} from "react-router-dom";

export const Register = () => {
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
        <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>Регистрация</h2>
        <form className={`${styles.form} frm`}>
          <Input
            type={'text'}
            placeholder={'Имя'}
            extraClass={`mb-6`}
            name={'name'}
            value={values['name'] || ''}
            onChange={handleChange}
          />
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
            Зарегистрироваться
          </Button>
        </form>
        <p className={`${styles.text} text text_type_main-default text_color_inactive mb-4`}>
          Уже зарегистрированы?
          <NavLink className={`${styles.link} text text_color_accent`} to={'/login'}> Войти</NavLink>
        </p>
      </div>
    </section>

  )
}
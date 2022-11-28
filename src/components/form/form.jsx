import styles from './form.module.css';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";

export const Form = ({formTitle, children, buttonTitle, formIsValid}) => {

  return (
    <form className={`${styles.form} form`}>
      <h2 className={`${styles.form__title} text text_type_main-medium mb-6`}>{formTitle}</h2>
      {children}
      <Button
        extraClass={`${styles.form__submitBtn} mb-20`}
        htmlType={"submit"}
        type={'primary'}
        disabled={!formIsValid}
      >
        {buttonTitle}
      </Button>
    </form>
  )
}
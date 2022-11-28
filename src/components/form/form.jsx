import styles from './form.module.css';
import {Button} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

export const Form = ({formTitle, children, buttonTitle, formIsValid, onSubmit}) => {

  return (
    <form className={`${styles.form} form`} onSubmit={onSubmit}>
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

Form.propTypes = {
  formTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  formIsValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
}
import burger from '../../images/573-5733580_hamburger-clipart-black-and-white-white-burger-icon.png';
import styles from  './not-found.module.css'
import {FC} from "react";

export const NotFound: FC = (): JSX.Element => {
  return (
    <section className={`${styles.page}`}>
      <div className={`${styles.container}`}>
        <div className={`${styles.digits__container}`}>
          <span className={`${styles.digits} digits`}>4</span>
          <img src={burger} className={`${styles.image}`}/>
          <span className={`${styles.digits} digits`}>4</span>
        </div>
        <p className={`text text_type_main-large ${styles.text}`}>
          Страница не найдена
        </p>
      </div>
    </section>

  )
}
import styles from "./side-menu.module.css";
import {NavLink, useHistory, useLocation} from "react-router-dom";
import {logout} from "../../services/actions/auth";
import {useDispatch} from "../../utils/hooks";

export const SideMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logout());
    history.replace({pathname: "/login",
      state: {from: location}});
  }

  return (
    <div className={`${styles.container}`}>
      <ul className={`${styles.nav}`}>
        <li className={`${styles.nav__listItem}`}>
          <NavLink
            to={'/profile'}
            exact={true}
            className={`${styles.nav__link} text text_type_main-medium`}
            activeClassName={`${styles.nav__link_active}`}
          >
            Профиль
          </NavLink>
        </li>
        <li className={`${styles.nav__listItem}`}>
          <NavLink
            to={'/profile/orders'}
            exact={true}
            className={`${styles.nav__link} text text_type_main-medium`}
            activeClassName={`${styles.nav__link_active}`}
          >
            История заказов
          </NavLink>
        </li>
        <li className={`${styles.nav__listItem}`}>
          <NavLink
            to={'/login'}
            exact={true}
            className={`${styles.nav__link} text text_type_main-medium`}
            activeClassName={`${styles.nav__link_active}`}
            onClick={handleLogout}
          >
            Выход
          </NavLink>
        </li>
      </ul>
      <p className={`${styles.sideText} text text_type_main-default text_color_inactive`}>
        В этом разделе вы можете
        изменить свои персональные данные
      </p>
    </div>
  )
}
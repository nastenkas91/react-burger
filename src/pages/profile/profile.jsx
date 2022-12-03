import styles from './profile.module.css'
import {SideMenu} from "../../components/side-menu/side-menu";
import {ProfileForm} from "../../components/profile-form/profile-form";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spinner} from "../../components/spinner/spinner";

export const Profile = () => {
  const location = useLocation();
  const {sendLogoutRequest} = useSelector(state => state.loginReducer);

  return (
    <section className={`${styles.profile}`}>
      <div className={`${styles.profile__container}`}>
        <SideMenu />
        {
          location.pathname === '/profile' && <ProfileForm />
        }
      </div>
      {
        sendLogoutRequest &&
          <Spinner />
      }
    </section>
  )
}
import styles from './profile.module.css'
import {useDispatch} from "react-redux";
import {getUser} from "../../services/actions/auth";
import {useEffect} from "react";
import {SideMenu} from "../../components/side-menu/side-menu";
import {ProfileForm} from "../../components/profile-form/profile-form";
import {useLocation} from "react-router-dom";

export const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(getUser())
  }, [])

  return (
    <section className={`${styles.profile}`}>
      <div className={`${styles.profile__container}`}>
        <SideMenu />
        {
          location.pathname === '/profile' && <ProfileForm />
        }
      </div>
    </section>
  )
}
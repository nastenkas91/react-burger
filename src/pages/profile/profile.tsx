import styles from './profile.module.css'
import {SideMenu} from "../../components/side-menu/side-menu";
import {ProfileForm} from "../../components/profile-form/profile-form";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {Spinner} from "../../components/spinner/spinner";
import {FC, useEffect} from "react";
import {Feed} from "../../components/feed/feed";
import {useDispatch} from "../../utils/hooks";
import {WS_PROFILE_FEED_CONNECTION_START} from "../../services/actions/ws-profile-feed";

export const Profile: FC = (): JSX.Element => {
  const location = useLocation();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: WS_PROFILE_FEED_CONNECTION_START });
  }, [])

  const {sendLogoutRequest} = useSelector((state: any) => state.loginReducer);

  return (
    <section className={`${styles.profile}`}>
      <div className={`${styles.profile__container}`}>
        <SideMenu />
        {
          location.pathname === '/profile' && <ProfileForm />
        }
        {
          location.pathname === '/profile/orders' && <Feed type={'account'} />
        }
      </div>
      {
        sendLogoutRequest &&
          <Spinner />
      }
    </section>
  )
}
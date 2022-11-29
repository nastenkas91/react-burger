import {useEffect} from "react";
import {AppHeader} from "../app-header/app-header";
import {ConstructorPage} from "../../pages/constructor-page/constructor-page";
import {getIngredients} from "../../services/actions/ingredients";
import {useDispatch} from "react-redux";
import {Route, Switch} from "react-router-dom";
import {Login} from "../../pages/login/login";
import {Register} from "../../pages/register/register";
import {ForgotPassword} from "../../pages/forgot-password/forgot-password";
import {ResetPassword} from "../../pages/reset-password/reset-password";
import {Profile} from "../../pages/profile/profile";

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients())
  }, [])

  return (
    <>
      <AppHeader />
      <Switch>
        <Route path={'/'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route path={'/login'} exact={true}>
          <Login />
        </Route>
        <Route path={'/register'} exact={true}>
          <Register />
        </Route>
        <Route path={'/forgot-password'} exact={true}>
          <ForgotPassword />
        </Route>
        <Route path={'/reset-password'} exact={true}>
          <ResetPassword />
        </Route>
        <Route path={'/profile'} exact={true}>
          <Profile />
        </Route>
        <Route path={'/ingredients/:id'} exact={true}>
          <ConstructorPage />
        </Route>
        <Route>
          <ConstructorPage />
        </Route>
      </Switch>
    </>
  );
}

